const {
  matchPost,
  matchSubCategory,
  getFullUrl,
  fixImage,
} = require('./helpers');
const shouldShowPrerenderedPage = require('./should-show-prerender-page');

/* eslint-disable prefer-destructuring, no-underscore-dangle */
module.exports = async (req, res, next) => {
  if (!shouldShowPrerenderedPage(req)) {
    return next();
  }

  const { db } = req;

  // If there is no database connection, then skip it
  if (!db) {
    return next();
  }

  const Post = db.collection('post');
  const PostTag = db.collection('posttag');
  const Tag = db.collection('tag');
  const Media = db.collection('media');
  const foundSubCategory = matchSubCategory(req.url);
  const foundPost = matchPost(req.url);
  const isLifestyle = foundSubCategory
    ? foundSubCategory.category === 'lifestyle'
    : null;
  const excludeCategories = ['sectors', 'country'];

  // if match post then handle it
  if (!isLifestyle && !foundPost) {
    return next();
  }

  const noIndex = excludeCategories.some(
    category => req.url.indexOf(category) > -1,
  );

  // Get slug
  let slug;
  if (foundPost) {
    slug = foundPost.slug.split('?')[0];
  } else {
    slug = foundSubCategory.subCategory.split('?')[0];
  }

  // Get category
  let category;
  if (foundPost) {
    category = foundPost.subCategory;
  } else {
    category = foundSubCategory.category;
  }

  const fullUrl = getFullUrl(req);
  const post = await Post.findOne({ slug });

  // if not found post then skip it
  if (!post) {
    return next();
  }

  // Get thumbnail of post
  const thumbnail = await Media.findOne({ _id: post.thumbnailId });
  const coverTemp = thumbnail ? thumbnail.link : null;
  const cover = fixImage(coverTemp, 940, 627);

  // Get tags of post
  const postTags = await PostTag.find({ postId: post._id }).toArray();
  const tags = await Promise.all(
    postTags.map(tag => Tag.findOne({ _id: tag.tagId })),
  );

  // Get createdAt and updatedAt of post
  const createdAt = new Date(post.createdAt).toISOString();
  const updatedAt = new Date(post.updatedAt).toISOString();

  return res.render('post', {
    title: post.title,
    description: post.summary,
    url: fullUrl,
    noIndex,
    cover,
    category,
    tags,
    createdAt,
    updatedAt,
  });
};
