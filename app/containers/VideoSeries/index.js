/**
 *
 * VideoSeries
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
import Headline from 'components/Headline';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectListOfVideoSeries } from './selectors';
import { getVideoSeries } from './actions';
import reducer from './reducer';
import saga from './saga';
import Wrapper from './Wrapper';

/* eslint-disable react/prefer-stateless-function */
export class VideoSeries extends React.PureComponent {
  componentDidMount() {
    const slug = this.props.match.params.seriesSlug;
    this.props.fetchVideoSeries(slug);
  }

  render() {
    const { eventDetailSlug, seriesSlug } = this.props.match.params;
    const title = seriesSlug.replace(/-/g, ' ').toUpperCase();
    const videoSeries = isArray(this.props.videoSeries)
      ? this.props.videoSeries
      : [];
    return (
      <Wrapper>
        <Container>
          <div className="content-wrapper">
            <Headline title={title} />
            {videoSeries.map(item => (
              <VideoCard
                to={`/video/${eventDetailSlug}/${seriesSlug}/${get(
                  item,
                  'slug',
                )}`}
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

VideoSeries.propTypes = {
  fetchVideoSeries: PropTypes.func.isRequired,
  videoSeries: PropTypes.oneOf(PropTypes.array, PropTypes.object),
  match: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  videoSeries: makeSelectListOfVideoSeries(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchVideoSeries: evt => dispatch(getVideoSeries(evt)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'videoSeries', reducer });
const withSaga = injectSaga({ key: 'videoSeries', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(VideoSeries);
