import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/global.scss";
import data from "./global/utils";

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
