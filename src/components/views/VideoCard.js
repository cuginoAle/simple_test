import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ReactPlayer from "react-player";
import Spinner from "components/common/spinner";

const defaultVideoSettings = {
  controls: true,
  height: "100%",
  muted: true,
  playing: false,
  preload: "auto",
  width: "100%"
};

const Wrapper = styled.div`
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  margin: 10px;
  overflow: hidden;
  padding-bottom: 50%;
  position: relative;
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

const VideoCard = ({ className, src }) => {
  const classes = ["VideoCard"];
  const [videoIsReady, setVideoIsReady] = React.useState(false);
  const [videoSettings, setVideoSettings] = React.useState(
    defaultVideoSettings
  );

  if (className) classes.push(className);

  function handleMouseEnter() {
    setVideoSettings({
      ...videoSettings,
      playing: true
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
      className={classes.join(" ")}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {src ? (
        <>
          {!videoIsReady && <Spinner relativeToParent />}
          <ReactPlayer url={src} {...videoSettings} onReady={onReady} />
        </>
      ) : (
        <div className="placeholder">Other video</div>
      )}
    </Wrapper>
  );
};

VideoCard.displayName = "VideoCard";

VideoCard.propTypes = {
  className: PropTypes.string
};

VideoCard.defaultProps = {
  className: null
};

export default VideoCard;
