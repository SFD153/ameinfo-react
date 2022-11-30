/**
 *
 * VideoEvent
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Container } from 'reactstrap';
import { get, isArray } from 'lodash';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import VideoCard from 'components/VideoCard';
import makeSelectVideoEvent, { makeSelectVideoEvents } from './selectors';
import { getVideoEvents } from './actions';
import reducer from './reducer';
import saga from './saga';
import Wrapper from './Wrapper';

/* eslint-disable react/prefer-stateless-function */
export class VideoEvent extends React.PureComponent {
  componentDidMount() {
    this.props.fetchVideoEvents();
  }

  render() {
    const videoEvents = isArray(this.props.videoEvents)
      ? this.props.videoEvents
      : [];
    return (
      <Wrapper>
        <Container>
          <div className="content-wrapper">
            {videoEvents.map(item => (
              <VideoCard
                to={`/video/${get(item, 'slug')}`}
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

VideoEvent.propTypes = {
  fetchVideoEvents: PropTypes.func.isRequired,
  videoEvents: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  videoEvent: makeSelectVideoEvent(),
  videoEvents: makeSelectVideoEvents(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchVideoEvents: () => dispatch(getVideoEvents()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'videoEvent', reducer });
const withSaga = injectSaga({ key: 'videoEvent', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(VideoEvent);
