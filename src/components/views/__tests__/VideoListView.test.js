import { render } from '@testing-library/react';
import React from 'react';
import VideoListView from '../VideoListView';

describe('VideoCard', () => {
  it('Should match spanshot for video', () => {
    const videoList = [{
      key: 'test',
      src: 'some url...',
    }];
    const app = render(<VideoListView videoList={videoList} />);

    expect(app).toMatchSnapshot();
  });
});
