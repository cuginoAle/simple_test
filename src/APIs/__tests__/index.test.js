import api from 'APIs';

describe('APIs', () => {
  it('Should return a 3 item array', async () => {
    const data = await api.getVideos();

    expect(data.length).toEqual(3);
  });
});
