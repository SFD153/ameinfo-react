/**
 *
 * TextItem
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { ci } from 'utils/cloudinary';

// import styled from 'styled-components';

function TextItem(props) {
  const {
    link,
    thumbnail,
    thumbnailUrl,
    tiny,
    title,
    horizontal,
    align,
  } = props;
  if (thumbnail) {
    return (
      <div>
        <div className="media">
          <Link to={link} className="scale media_flex">
            <img className="mr-3" src={ci(thumbnailUrl, 85, 50)} alt={title} />
            <div className="media-body">
              <p
                className={cn({
                  small_txt: !tiny,
                  s_txt: tiny,
                })}
              >
                {title}
              </p>
            </div>
          </Link>
        </div>
        <hr />
      </div>
    );
  }
  return (
    <div>
      <div>
        <p
          className={cn({
            small_txt: !tiny,
            s_txt: tiny,
          })}
        >
          <Link to={link}>{title}</Link>
        </p>
      </div>
      {horizontal ? null : <hr className={cn({ 'align-hr': align })} />}
    </div>
  );
}

TextItem.propTypes = {
  thumbnail: PropTypes.bool,
  thumbnailUrl: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
  tiny: PropTypes.bool,
  horizontal: PropTypes.bool,
  align: PropTypes.bool,
};

TextItem.defaultProps = {
  thumbnail: false,
  align: false,
};

export default TextItem;
