export default {
  getVideos: () => new Promise((resolve) => {
    resolve(
      [
        {
          src: 'https://www.youtube.com/watch?v=c3AzU1bXRkw',
          key: 'video_1',
        },
        {
          src: 'https://www.youtube.com/watch?v=HR1ve3s2Pe0',
          key: 'video_2',
        },
        {
          src: 'https://www.youtube.com/watch?v=bQFj-YP3XSQ',
          key: 'video_3',
        },
      ],
    );
  }),
};
