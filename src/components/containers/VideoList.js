import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import VideoCard from "components/views/VideoCard";

const Wrapper = styled.ul`
  > li {
  }
`;

const VideoList = ({ className, getVideos }) => {
  const [videos, setVideos] = React.useState([]);

  const classes = ["VideoList"];
  if (className) classes.push(className);

  React.useEffect(() => {
    getVideos().then(data => setVideos(data));
  }, [getVideos]);

  return (
    <Wrapper className={classes.join(" ")}>
      {videos.map(src => (
        <li key={src}>
          <VideoCard src={src} />
        </li>
      ))}
    </Wrapper>
  );
};

VideoList.displayName = "VideoList";

VideoList.propTypes = {
  className: PropTypes.string
};

VideoList.defaultProps = {
  className: null
};

export default VideoList;
