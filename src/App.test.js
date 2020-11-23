import { render, waitFor } from '@testing-library/react';
import React from 'react';
import App from 'App';

describe('App', () => {
  it('Should match spanshot', () => {
    const app = waitFor(() => render(<App />));

    expect(app).toMatchSnapshot();
  });
});
