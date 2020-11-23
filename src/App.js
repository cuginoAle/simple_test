import "theme/base.css";
import VideoList from "./components/containers/VideoList";
import api from "api";
function App() {
  return (
    <div className="App">
      <VideoList getVideos={api.getVideos} />
    </div>
  );
}

export default App;
