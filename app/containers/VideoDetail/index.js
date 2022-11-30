/**
 *
 * VideoDetail
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Headline from 'components/Headline';
import TagMeta from 'components/TagMeta';
import SocialSharing from 'components/SocialSharing';
import { get } from 'lodash';
import { Row, Col } from 'reactstrap';
import ReactLayer from 'react-player';
import { getYoutubeThumbnail } from 'utils/helpers';
import { withRouter } from 'react-router-dom';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectVideoDetail, {
  makeSelectVideo,
  makeSelectRelatedVideos,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import Card from './components/Card';
import { getRelatedVideos, getVideoDetail } from './actions';
import Title from './Title';
import Player from './Player';
import Description from './Description';
import RelatedVideo from './RelatedVideo';

/* eslint-disable react/prefer-stateless-function */
export class VideoDetail extends React.PureComponent {
  componentDidMount() {
    this.fetchAll();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.fetchAll();
    }
  }

  fetchAll() {
    const slug = this.props.match.params.detailSlug;
    const { listSlug } = this.props.match.params;
    const { fetchRelatedVideos, fetchVideoDetail } = this.props;
    fetchRelatedVideos(slug, listSlug);
    fetchVideoDetail(slug);
  }

  render() {
    const { video, relatedVideos } = this.props;
    const { eventDetailSlug, seriesSlug, detailSlug } = this.props.match.params;
    const path = `/video/${eventDetailSlug}/${seriesSlug}/${detailSlug}`;
    return (
      <Fragment>
        <Title>{get(video, 'title')}</Title>
        <ul className="post-meta-info">
          <li className="bla">
            <TagMeta source={get(video, 'tags')} />
          </li>
          <li className="share-post">
            <SocialSharing title={get(video, 'title')} />
          </li>
        </ul>
        <Player className="player-wrapper">
          <ReactLayer
            url={get(video, 'embedded')}
            className="react-player"
            controls
            width="100%"
            height="100%"
          />
        </Player>
        <Description>{get(video, 'description')}</Description>
        <RelatedVideo>
          <Headline title="Related Videos" />
          <Row>
            {relatedVideos.map(item => (
              <Col lg={4}>
                <Card
                  to={`${path}/${get(item, 'slug')}`}
                  thumbnail={getYoutubeThumbnail(get(item, 'embedded'))}
                  title={get(item, 'title')}
                />
              </Col>
            ))}
          </Row>
        </RelatedVideo>
      </Fragment>
    );
  }
}

VideoDetail.propTypes = {
  fetchVideoDetail: PropTypes.func.isRequired,
  fetchRelatedVideos: PropTypes.func.isRequired,
  video: PropTypes.object,
  relatedVideos: PropTypes.array,
  match: PropTypes.object,
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  videoDetail: makeSelectVideoDetail(),
  video: makeSelectVideo(),
  relatedVideos: makeSelectRelatedVideos(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchVideoDetail: evt => dispatch(getVideoDetail(evt)),
    fetchRelatedVideos: (slug, category) =>
      dispatch(getRelatedVideos(slug, category)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'videoDetail', reducer });
const withSaga = injectSaga({ key: 'videoDetail', saga });

export default compose(
  withRouter,
  withReducer,
  withSaga,
  withConnect,
)(VideoDetail);
