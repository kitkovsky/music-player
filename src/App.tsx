import React, { useState, useRef } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
import "./styles/global.scss";
import getSongs from "./global/utils";
import ISongInfo from "./global/songInfo.interface";

const App: React.FC = () => {
  const [songs, setSongs] = useState(getSongs());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState<ISongInfo>({
    currentTime: 0,
    duration: 0,
  });
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const timeUpdateHandler = (event: React.SyntheticEvent<HTMLAudioElement>) => {
    const target = event.target as HTMLAudioElement;
    const duration = target.duration;
    const currentTime = target.currentTime;
    setSongInfo({ ...songInfo, currentTime: currentTime, duration: duration });
  };

  return (
    <div className="App">
      <Nav isLibraryOpen={isLibraryOpen} setIsLibraryOpen={setIsLibraryOpen} />
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
      <Library
        songs={songs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        isLibraryOpen={isLibraryOpen}
      />
      <audio
        onTimeUpdate={(event) => timeUpdateHandler(event)}
        onLoadedMetadata={(event) => timeUpdateHandler(event)}
        ref={audioRef}
        src={currentSong.audioUrl}
      ></audio>
    </div>
  );
};

export default App;
