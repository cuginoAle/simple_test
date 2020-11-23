import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import Spinner from 'components/common/spinner';

const videoRatio = (9 * 100) / 16; // this is 16/9 ratio

const defaultVideoSettings = {
  controls: true,
  height: '100%',
  muted: true,
  playing: false,
  preload: 'auto',
  width: '100%',
};

const Wrapper = styled.div`
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  overflow: hidden;
  padding-bottom: ${videoRatio}%;
  position: relative;
  background-color: rgba(255, 255, 255, 0.4);
  &:before {
    content: "";
    position: absolute;
    width: calc(100% + 5px);
    height: calc(100% + 5px);
    top: -5px;
    left: -5px;
    border: 5px solid transparent;
  }

  &:hover {
    &:before {
      border-color: red;
    }
  }
  > div {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  > .placeholder {
    font-size: 3rem;
    color: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const VideoCard = ({ className, videoDetails }) => {
  const classes = ['VideoCard'];
  const [videoIsReady, setVideoIsReady] = React.useState(false);
  const [videoSettings, setVideoSettings] = React.useState(
    defaultVideoSettings,
  );

  if (className) classes.push(className);

  function handleMouseEnter() {
    setVideoSettings({
      ...videoSettings,
      playing: true,
    });
  }

  function handleMouseLeave() {
    setVideoSettings({ ...videoSettings, playing: false });
  }

  function onReady() {
    setVideoIsReady(true);
  }

  return (
    <Wrapper
      className={classes.join(' ')}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {videoDetails.src ? (
        <>
          {!videoIsReady && <Spinner relativeToParent />}
          <ReactPlayer
            url={videoDetails.src}
            {...videoSettings}
            onReady={onReady}
          />
        </>
      ) : (
        <div className="placeholder">
          Other video
          &nbsp;
          {videoDetails.key}
        </div>
      )}
    </Wrapper>
  );
};

VideoCard.displayName = 'VideoCard';

VideoCard.propTypes = {
  className: PropTypes.string,
  videoDetails: PropTypes.shape({
    key: PropTypes.string.isRequired,
    src: PropTypes.string,
  }).isRequired,
};

VideoCard.defaultProps = {
  className: null,
};

export default VideoCard;
