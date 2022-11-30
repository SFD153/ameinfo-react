/**
 *
 * Post
 *
 */

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Helmet } from 'react-helmet';
import Sidebar from 'containers/Sidebar/Loadable';
import AuthorBox from 'components/AuthorBox';
import agent from 'utils/agent';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import Parser from 'html-react-parser';
import { PostLoader, PostTitleLoader } from 'components/ContentLoader';
import uniqid from 'uniqid';
import parse from 'url-parse';
import jwt from 'utils/jwt';
import NotFound from 'containers/NotFound/Loadable';
import thumbnail512x256 from 'assets/images/thumbnail-512x256.png';
import { getCategorySlug } from 'utils/category';
import Object from 'valid-objectid';
import styleToObject from 'style-to-object';
import { createStructuredSelector } from 'reselect';
import Cookie from 'js-cookie';
import { Mobile } from 'components/Responsive';

import ImageBox from 'components/ImageBox/Loadable';
import Thumbnail from 'components/Thumbnail/Loadable';
import Summary from 'components/Summary/Loadable';
import AuthorMeta from 'components/AuthorMeta/Loadable';
import ReleaseDateMeta from 'components/ReleaseDateMeta/Loadable';
import TagMeta from 'components/TagMeta/Loadable';
import Gallery from 'components/Gallery/Loadable';
import Video from 'components/Video/Loadable';
import Audio from 'components/Audio/Loadable';
import AdUnit from 'components/AdUnit';
import { ci } from 'utils/cloudinary';

import {
  FacebookShareButton,
  EmailShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from 'react-share';
import { isEmpty, get, first, last } from 'lodash';

import { ContentLocker } from '../ContentLocker';
import { setPageType } from '../App/actions';
import { setPostId } from '../Sidebar/actions';
import 'froala-editor/css/froala_style.min.css';

const RELATED_ARTICLE_PHOTO_WIDTH = 512;

/* eslint-disable react/prefer-stateless-function */
export class Post extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hideMe: true,
      slug: props.match.params.postSlug,
      post: {},
      relatedArticles: [],
      open: false,
      media: '',
      ready: false,
      error: false,
      lock: false,
      links: [],
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleMatchPassword = this.handleMatchPassword.bind(this);
    this.isAddCanonical = this.isAddCanonical.bind(this);
  }

  operation() {
    this.setState({ hideMe: false });
  }

  componentWillReceiveProps(nextProps) {
    const prevSlug = this.props.match.params.postSlug;
    const nextSlug = nextProps.match.params.postSlug;
    if (nextSlug !== prevSlug) {
      this.setState({ slug: nextSlug }, async () => {
        await this.setState({ ready: false });
        await this.fetchPost();
        await this.setState({ ready: true });
        if (window.googletag) {
          window.googletag.pubads().refresh();
        }
      });
    }
  }

  async componentDidMount() {
    await this.setState({ ready: false });
    await this.fetchPost();
    await this.setState({ ready: true });
    if (window.googletag) {
      window.googletag.pubads().refresh();
    }
  }

  async fetchPost() {
    const { slug } = this.state;
    const { pathname } = this.props.location;
    let post = {};
    let links = [];
    let lock = false;
    let error = false;

    // Get article information
    try {
      const response = await agent.get(`/articles/${slug}`);
      post = response.body;
      if (!isEmpty(post.password)) {
        lock = true;
      }
    } catch (e) {
      this.props.history.push('/');
    }

    // Check article is in this categories or not
    try {
      const response = await agent.get(`/articles/${slug}/links`);
      links = response.body;
      const isInclude = links.some(link => pathname.indexOf(link) > -1);
      error = !isInclude;
    } catch (e) {
      this.props.history.push('/');
    }

    // Set Post ID
    this.props.setPostId(get(post, 'id', ''));

    const category = this.getCurrentRoute();

    // Get related articles
    let relatedArticles = [];
    try {
      const response = await agent
        .get(`/articles/${slug}/related_articles`)
        .query({ category });
      relatedArticles = response.body;
    } catch (e) {
      relatedArticles = [];
    }

    // Get user information
    let user;
    try {
      const response = await agent.get(`/articles/${slug}/users`);
      user = response.body;
    } catch (e) {
      user = {};
    }

    // Only user can read private post
    const status = get(post, 'status', '');
    if (!isEmpty(status) && status === 'private') {
      let userId;
      try {
        const token = Cookie.get('app.Authorization');
        const userInfo = jwt.decode(token);
        userId = get(userInfo, 'id');
      } catch (e) {
        error = true;
      }

      if (!Object.isValid(userId)) {
        error = true;
      }
    }

    // Set state
    this.setState({ links, post, relatedArticles, user, error, lock });

    // Set page type
    this.props.setPageType('Post');
  }

  getCurrentRoute() {
    const { pathname } = this.props.location;
    const tree = pathname.split('/').filter(item => !isEmpty(item));
    const count = tree.length;

    let route;
    if (pathname === '/') {
      route = 'home';
    } else if (count === 3) {
      tree.splice(-1, 1);
      route = last(tree);
    } else if (tree.indexOf('lifestyle') > -1) {
      route = 'lifestyle';
    } else {
      route = last(tree);
    }

    return route;
  }

  isExcludeIndex() {
    const { pathname } = this.props.location;
    const parents = pathname.split('/').filter(item => item !== '');
    const parent = first(parents);
    const excluded = ['sectors', 'country'];
    return excluded.some(category => parent === category);
  }

  isAddCanonical() {
    const { links } = this.state;
    const noIndex = this.isExcludeIndex();
    const includeCanonical = links.some(link => link.indexOf('industry') > -1);
    return noIndex ? includeCanonical : false;
  }

  handleOpenModal() {
    this.setState({ open: true });
  }

  handleCloseModal() {
    this.setState({ open: false });
  }

  renderThumbnail() {
    const { post } = this.state;
    const firstKeyPoint = get(post, 'firstKeyPoint', '');
    const secondKeyPoint = get(post, 'secondKeyPoint', '');
    const thirdKeyPoint = get(post, 'thirdKeyPoint', '');
    const points = [firstKeyPoint, secondKeyPoint, thirdKeyPoint];
    const keypoints = points.filter(point => !isEmpty(point));
    const summary = get(post, 'summary', '');
    const format = get(post, 'format.name', 'standard');
    const isFull = isEmpty(keypoints) && isEmpty(summary);
    const attachments = get(post, 'attachments', []);
    const embedded = get(post, 'embedded', '');
    const images = attachments.map(item => ({
      original: item.link,
      thumbnail: item.link,
    }));
    const video = first(attachments);

    let videoLink;
    if (!isEmpty(attachments)) {
      const hash = get(video, 'hash');
      const extension = get(video, 'extension');
      const videoStreamURL = process.env.VIDEO_STREAM_URL;
      videoLink = `https://${videoStreamURL}/${hash}.${extension}`;
    }

    if (!isEmpty(embedded)) {
      videoLink = embedded;
    }

    let thumbnail;

    switch (format) {
      case 'standard':
        thumbnail = (
          <Thumbnail
            mode={isFull ? 'full' : 'half'}
            link={get(post, 'thumbnail.link')}
            alt={get(post, 'title')}
            caption={get(post, 'thumbnailCaption')}
          >
            <Summary>{get(post, 'summary')}</Summary>
            <ul className="list-unstyled last_ul">
              {keypoints.map(keypoint => (
                <li className="list-unstyled-item bdr_btm">{keypoint}</li>
              ))}
            </ul>
          </Thumbnail>
        );
        break;
      case 'gallery':
        thumbnail = <Gallery items={images} />;
        break;
      case 'video':
        thumbnail = (
          <Video url={videoLink} caption={get(post, 'thumbnailCaption')} />
        );
        break;
      case 'podcast':
        thumbnail = (
          <Audio src={`${get(video, 'hash')}.${get(video, 'extension')}`} />
        );
        break;
      default:
        thumbnail = null;
        break;
    }

    return thumbnail;
  }

  renderContent(content) {
    const element = document.createElement('div');
    element.innerHTML = content;

    const anchors = element.querySelectorAll('a[href*="ameinfo.com"]');
    anchors.forEach(anchor => {
      const children = [...anchor.children];
      const tags = children.map(tag => tag.tagName);
      if (tags.includes('IMG')) return;
      const parsed = parse(anchor.getAttribute('href'));
      anchor.setAttribute('id', 'anchor');
      anchor.setAttribute('href', getCategorySlug(parsed.pathname));
      anchor.setAttribute('children', anchor.innerHTML);
    });

    // fix img src
    const imageSrcs = element.querySelectorAll('img');
    imageSrcs.forEach(image => {
      const src = image.getAttribute('src');
      image.setAttribute('src', ci(src));
    });

    // Find all anchors have image element
    const images = element.querySelectorAll('a > img');
    images.forEach(image => {
      image.parentNode.replaceWith(image);
      image.setAttribute('id', 'popup');
    });

    // Inject ads on the second paragraph
    const spaces = element.querySelectorAll('p');
    const space = spaces[2];
    if (space) {
      const adBr = document.createElement('br');
      space.parentNode.insertBefore(adBr, space);
      adBr.setAttribute('id', 'ads');
    }

    return Parser(element.innerHTML, {
      replace: ({ attribs }) => {
        if (attribs && attribs.id === 'anchor') {
          return React.createElement(
            Link,
            {
              to: attribs.href,
              style: attribs.style ? styleToObject(attribs.style) : {},
            },
            Parser(attribs.children),
          );
        }

        if (attribs && attribs.id === 'ads') {
          return React.createElement(
            AdUnit,
            { id: 'div-gpt-ad-7742036-5' },
            <br />,
          );
        }

        if (attribs && attribs.id === 'popup') {
          // separate the src for processing
          const { src } = attribs;
          const newSrc = ci(src);
          return React.createElement(
            ImageBox,
            {},
            <img {...attribs} src={newSrc} alt={newSrc} />,
          );
        }

        return false;
      },
    });
  }

  handleMatchPassword(match) {
    this.setState({
      lock: !match,
    });
  }

  render() {
    const {
      post,
      slug,
      user,
      media,
      open,
      relatedArticles,
      ready,
      error,
      lock,
      links,
    } = this.state;

    const tags = get(post, 'tags', []);
    const password = get(post, 'password', '');
    const addCanonical = this.isAddCanonical();
    const canonicalPath = links.filter(link => link.indexOf('industry') > -1);
    const baseUrl = 'https://www.ameinfo.com';
    const fullUrl = `${baseUrl + canonicalPath}/${slug}`;
    const noIndex = this.isExcludeIndex();

    // Show not found page
    if (error) {
      return <NotFound />;
    }

    // Show lock content page
    if (lock) {
      return (
        <ContentLocker
          password={password}
          onMatchPassword={this.handleMatchPassword}
        />
      );
    }

    return (
      <section className="content">
        <Helmet>
          <title>{get(post, 'title')}</title>
          <meta name="description" content={get(post, 'summary')} />
          {addCanonical && <link rel="canonical" href={fullUrl} />}
          {noIndex && <meta name="robots" content="noindex, nofollow" />}
          <script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PHLN6QP'); `}</script>
          <script>
            {`
      !function(a,b,c,d,e){var f=window.kochava=window.kochava||[];if(f.loaded)return void(window.console&&console.error&&console.error("Kochava snippet already included"));f.loaded=!0,f.methods=["page","identify","activity","conversion","init"],stub=function(a){return function(){var b=Array.prototype.slice.call(arguments);return b.unshift(a),f.push(b),f}};for(var g=0;g<f.methods.length;g++){var h=f.methods[g];f[h]=stub(h)}f.init((new Date).getTime(),a,e),function(){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=("https:"===document.location.protocol?"https://":"http://")+"assets.kochava.com/kochava.js/"+b+"/kochava.min.js",d||(a.src=a.src+"?c="+Math.random());var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(a,c)}(),c&&f.page()
}("koame-info-uz3i","v2.1",true,true,false);
         `}
          </script>
        </Helmet>

        <section className="leave_sec" id="live_sec">
          <Container fluid>
            <Row>
              <Col lg="12">
                <section className="ame-post">
                  <Container>
                    <Row>
                      <Col lg="12">
                        <PostTitleLoader ready={ready}>
                          <h1>{get(post, 'title')}</h1>
                          <ul className="post-meta-info">
                            <li>
                              <AuthorMeta
                                name={get(user, 'fullName')}
                                avatar={get(user, 'avatar.link')}
                              />
                            </li>
                            <li>
                              <ReleaseDateMeta date={get(post, 'createdAt')} />
                            </li>
                            <li className="bla">
                              <TagMeta source={tags} />
                            </li>
                            <li className="share-post">
                              <FacebookShareButton
                                url={window.location.href}
                                quote={get(post, 'title')}
                              >
                                <i className="fa fa-facebook" />
                              </FacebookShareButton>
                              <TwitterShareButton
                                url={window.location.href}
                                title={get(post, 'title')}
                              >
                                <i className="fa fa-twitter" />
                              </TwitterShareButton>
                              <LinkedinShareButton
                                url={window.location.href}
                                title={get(post, 'title')}
                              >
                                <i className="fa fa-linkedin" />
                              </LinkedinShareButton>
                              <EmailShareButton
                                url={window.location.href}
                                subject={get(post, 'title')}
                              >
                                <i className="fa fa-envelope" />
                              </EmailShareButton>
                            </li>
                          </ul>
                        </PostTitleLoader>
                        <Row className="space30">
                          <Col lg="9" className="side-content">
                            <PostLoader ready={ready}>
                              <div className="thumbnail">
                                {this.renderThumbnail()}
                              </div>
                              <AdUnit id="div-gpt-ad-7742036-6" />
                              <AdUnit id="div-gpt-ad-7742036-7" />
                              <AdUnit id="div-gpt-ad-7742036-11" />
                              <Mobile>
                                {this.state.hideMe ? (
                                  <div className="bottom-ad">
                                    <div className="close-div">
                                      <button
                                        type="button"
                                        onClick={() => this.operation()}
                                      >
                                        <i
                                          className="fa fa-window-close"
                                          aria-hidden="true"
                                        />
                                      </button>
                                    </div>

                                    <AdUnit
                                      className="bottom-stick"
                                      id="div-gpt-ad-7742036-12"
                                    />
                                  </div>
                                ) : null}
                                <AdUnit
                                  id="div-gpt-ad-7742036-3"
                                  className="text-center mb-4"
                                />
                                <AdUnit id="div-gpt-ad-7742036-14" />
                              </Mobile>
                              <div className="content img-size fr-view">
                                {this.renderContent(get(post, 'content'))}
                              </div>
                              <AuthorBox
                                firstName={get(user, 'firstName')}
                                lastName={get(user, 'lastName')}
                                imageUrl={get(user, 'avatar.link')}
                                description={get(user, 'biographicalInfo')}
                              />
                              <div>
                                <div className="relate">
                                  <h4 className="red_side med_txt">
                                    Related Articles
                                  </h4>
                                </div>
                                <div className="row">
                                  {relatedArticles.map(item => (
                                    <div className="col-lg-4" key={uniqid()}>
                                      <Link
                                        to={get(item, 'permalink')}
                                        className="ball_box ball_box-fit full-image-block"
                                      >
                                        <img
                                          src={ci(
                                            get(
                                              item,
                                              'thumbnail.link',
                                              thumbnail512x256,
                                            ),
                                            RELATED_ARTICLE_PHOTO_WIDTH,
                                          )}
                                          className="img-fluid mx-auto d-block ball_img full-image"
                                          alt={get(item, 'title')}
                                        />
                                        <div className="overlay box11">
                                          <button
                                            className="btn btn_blue"
                                            type="button"
                                          >
                                            {get(
                                              item,
                                              'category',
                                              'Uncategorized',
                                            )}
                                          </button>
                                        </div>
                                        <h3 className="relative-item">
                                          {get(item, 'title')}
                                        </h3>
                                      </Link>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </PostLoader>
                          </Col>
                          <Col lg="3" className="side_media">
                            <Sidebar />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Container>
                </section>
              </Col>
            </Row>
          </Container>
        </section>
        <Modal
          classNames={{
            modal: 'media-modal',
            closeButton: 'media-modal-close-button',
          }}
          open={open}
          onClose={this.handleCloseModal}
          center
        >
          <img
            src={ci(media)}
            alt={get(post, 'title')}
            width="100%"
            height="100%"
          />
        </Modal>
      </section>
    );
  }
}

Post.propTypes = {
  setPageType: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    setPageType: pageType => dispatch(setPageType(pageType)),
    setPostId: postId => dispatch(setPostId(postId)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withRouter,
  withConnect,
)(Post);
