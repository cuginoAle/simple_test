export default {
  getVideos: () => {
    return new Promise(resolve => {
      const placeholders = Array.from(new Array(10));
      setTimeout(() => {
        resolve(
          [
            "https://www.youtube.com/watch?v=c3AzU1bXRkw",
            "https://www.youtube.com/watch?v=aLXrArPrZrU",
            "https://www.youtube.com/watch?v=bQFj-YP3XSQ",
            ...placeholders
          ],
          1000
        );
      });
    });
  }
};
