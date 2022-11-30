/**
 *
 * VideoEventDetail
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Container } from 'reactstrap';
import { get, isArray } from 'lodash';

import VideoCard from 'components/VideoCard';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectVideoEventDetail, {
  makeSelectVideoEventDetails,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import Wrapper from './Wrapper';
import { getVideoEventDetails } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class VideoEventDetail extends React.PureComponent {
  componentDidMount() {
    const slug = this.props.match.params.eventDetailSlug;
    this.props.fetchVideoEventDetails(slug);
  }

  render() {
    const { eventDetailSlug } = this.props.match.params;
    const videoEventDetails = isArray(this.props.videoEventDetails)
      ? this.props.videoEventDetails
      : [];
    return (
      <Wrapper>
        <Container>
          <div className="content-wrapper">
            {videoEventDetails.map(item => (
              <VideoCard
                to={`/video/${eventDetailSlug}/${get(item, 'slug')}`}
                title={get(item, 'name')}
                description={get(item, 'description')}
                thumbnail={get(item, 'thumbnail.link')}
              />
            ))}
          </div>
        </Container>
      </Wrapper>
    );
  }
}

VideoEventDetail.propTypes = {
  videoEventDetails: PropTypes.any,
  fetchVideoEventDetails: PropTypes.func,
  match: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  videoEventDetail: makeSelectVideoEventDetail(),
  videoEventDetails: makeSelectVideoEventDetails(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchVideoEventDetails: evt => dispatch(getVideoEventDetails(evt)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'videoEventDetail', reducer });
const withSaga = injectSaga({ key: 'videoEventDetail', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(VideoEventDetail);
