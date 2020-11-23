import React from 'react';
import api from 'APIs';
import styled from 'styled-components';
import bg from 'assets/background.png';
import VideoList from './components/containers/VideoList';

const Root = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
function App() {
  return (
    <Root id="root">
      <VideoList getVideos={api.getVideos} />
    </Root>
  );
}

export default App;
