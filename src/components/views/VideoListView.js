import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import VideoCard from 'components/views/VideoCard';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;

  .viewportName {
    font-size: 3em;
    padding: 10px;
    background-color: #eee;
    flex-shrink: 0;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
    position: relative;
    z-index: 2;
    &:after {
      content: "Mobile";
      margin-left: 1em;
    }
  }

  .videoListUl {
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    scroll-snap-type: y mandatory;
    overflow-y: auto;
    max-height: 100%;

    > li {
      min-width: 100%;
      padding: 10px;
      scroll-snap-align: start;
    }
  }

  @media screen and (min-width: 600px) {
    .viewportName {
      &:after {
        content: "Tablet";
      }
    }
    .videoListUl > li {
      min-width: 50%;
    }
  }

  @media screen and (min-width: 1024px) {
    .viewportName {
      &:after {
        content: "Desktop";
      }
    }
    .videoListUl {
      overflow: auto;
      flex-wrap: nowrap;
      scroll-snap-type: x mandatory;
      > li {
        min-width: 500px;
      }
    }
  }
`;

const VideoListView = ({ className, videoList }) => {
  const classes = ['VideoListView'];
  if (className) classes.push(className);

  return (
    <Wrapper className={classes.join(' ')}>
      <h2 className="viewportName">Viewport size:</h2>
      <ul className="videoListUl">
        {videoList.map((videoDetails) => (
          <li key={videoDetails.key}>
            <VideoCard videoDetails={videoDetails} />
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

VideoListView.displayName = 'VideoListView';

VideoListView.propTypes = {
  className: PropTypes.string,
  videoList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

VideoListView.defaultProps = {
  className: null,
};

export default VideoListView;
