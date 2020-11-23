import { render } from '@testing-library/react';
import React from 'react';
import VideoCard from '../VideoCard';

describe('VideoCard', () => {
  it('Should match spanshot for video', () => {
    const videoDetails = {
      key: 'test',
      src: 'some url...',
    };
    const testComponent = render(<VideoCard videoDetails={videoDetails} />);

    expect(testComponent).toMatchSnapshot();
  });

  it('Should match spanshot for dummy card', () => {
    const videoDetails = {
      key: 'test',
    };
    const testComponent = render(<VideoCard videoDetails={videoDetails} />);

    expect(testComponent).toMatchSnapshot();
  });
});
