import { render, waitFor } from '@testing-library/react';
import React from 'react';

import VideoList from '../VideoList';

describe('VideoList', () => {
  it('Should call getVideos fn one time only', async () => {
    const getVideos = jest.fn(() => new Promise((resolve) => resolve([])));

    await waitFor(() => { render(<VideoList getVideos={getVideos} />); });

    expect(getVideos).toHaveBeenCalledTimes(1);
  });
});
