import React from 'react';
import PropTypes from 'prop-types';
import VideoListView from '../views/VideoListView';

const VideoList = ({ getVideos }) => {
  const [videos, setVideos] = React.useState([]);

  React.useEffect(() => {
    getVideos()
      .then((data = []) => {
      // creating some dummy data
        const placeholders = Array.from(new Array(20)).map((item, index) => ({
          key: `video ${index}`,
        }));

        setVideos([...data, ...placeholders]);
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));
  }, [getVideos]);

  return <VideoListView videoList={videos} />;
};

VideoList.displayName = 'VideoList';

VideoList.propTypes = {
  getVideos: PropTypes.func.isRequired,
};

VideoList.defaultProps = {};

export default VideoList;
