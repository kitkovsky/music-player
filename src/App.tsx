import React, { useState } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/global.scss";
import getSongs from "./global/utils";

const App: React.FC = () => {
  const [songs, setSongs] = useState(getSongs());
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} />
    </div>
  );
};

export default App;
