/**
 *
 * VideoList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { get, isArray } from 'lodash';
import { Container } from 'reactstrap';
import VideoCard from 'components/VideoCard';
import { getYoutubeThumbnail } from 'utils/helpers';
import Headline from 'components/Headline';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectVideoList, { makeSelectVideoLists } from './selectors';
import { getVideoLists } from './actions';
import reducer from './reducer';
import saga from './saga';
import Wrapper from './Wrapper';

/* eslint-disable react/prefer-stateless-function */
export class VideoList extends React.PureComponent {
  componentDidMount() {
    const slug = this.props.match.params.listSlug;
    this.props.fetchVideoLists(slug);
  }

  render() {
    const { eventDetailSlug, seriesSlug, listSlug } = this.props.match.params;
    const title = listSlug.replace(/-/g, ' ').toUpperCase();
    const videoLists = isArray(this.props.videoLists)
      ? this.props.videoLists
      : [];
    return (
      <Wrapper>
        <Container>
          <div className="content-wrapper">
            <Headline title={title} />
            {videoLists.map(item => (
              <VideoCard
                to={`/video/${eventDetailSlug}/${seriesSlug}/${listSlug}/${get(
                  item,
                  'slug',
                )}`}
                title={get(item, 'title')}
                description={get(item, 'description')}
                thumbnail={getYoutubeThumbnail(get(item, 'embedded'))}
              />
            ))}
          </div>
        </Container>
      </Wrapper>
    );
  }
}

VideoList.propTypes = {
  fetchVideoLists: PropTypes.func.isRequired,
  videoLists: PropTypes.oneOf(PropTypes.object, PropTypes.array),
  match: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  videoList: makeSelectVideoList(),
  videoLists: makeSelectVideoLists(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchVideoLists: evt => dispatch(getVideoLists(evt)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'videoList', reducer });
const withSaga = injectSaga({ key: 'videoList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(VideoList);
