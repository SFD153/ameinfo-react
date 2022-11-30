import { first, last, isEmpty } from 'lodash';

const getSubCategoryName = (parent, sub) => {
  let subCategory = 'uncategorized';
  if (parent === 'money') {
    switch (sub) {
      case 'other-money':
        subCategory = 'gcc';
        break;
      case 'smes':
        subCategory = 'smb';
        break;
      case 'banking-finance':
      case 'economy':
      case 'markets':
        subCategory = 'finance';
        break;
      case 'insurance':
        subCategory = 'healthcare';
        break;
      default:
        break;
    }
  }

  if (parent === 'construction-real-estate') {
    switch (sub) {
      case 'other-construction-real-estate':
        subCategory = 'gcc';
        break;
      default:
        subCategory = 'construction-real-estate';
        break;
    }
  }

  if (parent === 'tag') {
    switch (sub) {
      case 'tag-heuer-2018':
        subCategory = 'startup';
        break;
      default:
        break;
    }
  }

  switch (parent) {
    case 'energy':
      subCategory = 'energy';
      break;
    case 'travel':
    case 'transportation':
      subCategory = 'travel-toursim-and-logitics';
      break;
    case 'technology':
      subCategory = 'technology';
      break;
    case 'media':
      subCategory = 'media';
      break;
    case 'luxury-lifestyle':
      subCategory = 'lifestyle';
      break;
    default:
      break;
  }

  return subCategory;
};

const getCategoryName = subCategoryName => {
  let category;
  switch (subCategoryName) {
    case 'gcc':
    case 'levant':
    case 'north-africa':
      category = 'country';
      break;
    case 'government':
    case 'corporate':
    case 'smb':
    case 'startup':
      category = 'sectors';
      break;
    case 'industry-government':
    case 'finance':
    case 'energy':
    case 'travel-toursim-and-logitics':
    case 'technology':
    case 'education':
    case 'healthcare':
    case 'retail':
    case 'construction-real-estate':
    case 'media':
      category = 'industry';
      break;
    case 'lifestyle':
      category = 'lifestyle';
      break;
    default:
      category = 'uncategorized';
      break;
  }

  return category;
};

const getCategorySlug = slug => {
  const items = slug.split('/').filter(path => !isEmpty(path));
  const parent = first(items);
  const sub = items.length > 2 ? items[1] : null;
  const post = last(items);

  const subCategory = getSubCategoryName(parent, sub);
  const category = getCategoryName(subCategory);
  const pathname = `/${category}/${subCategory}/${post}`;
  return pathname;
};

export { getCategorySlug };
