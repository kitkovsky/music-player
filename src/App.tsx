import React, { useState, useRef } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
import "./styles/global.scss";
import getSongs from "./global/data";
import ISongInfo from "./global/songInfo.interface";
import styled from "styled-components";

const AppContainer = styled.div<StyleProps>`
  transition: all 0.5s ease;
  margin-left: ${(props) => props.isLibraryOpen ? "30%" : "0%"};
  max-height: 100vh;
`

interface StyleProps {
  isLibraryOpen: boolean;
}

const App: React.FC = () => {
  const [songs] = useState(getSongs());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState<ISongInfo>({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const timeUpdateHandler = (event: React.SyntheticEvent<HTMLAudioElement>) => {
    const target = event.target as HTMLAudioElement;
    const duration = target.duration;
    const currentTime = target.currentTime;

    const roundedCurrent = Math.round(currentTime);
    const roundedDuration = Math.round(duration);
    const roundedPercentage = Math.round(
      (roundedCurrent / roundedDuration) * 100
    );

    setSongInfo({
      ...songInfo,
      currentTime: currentTime,
      duration: duration,
      animationPercentage: roundedPercentage,
    });
  };

  const songEndHandler = async () => {
    const currentId = songs.findIndex((song) => song.id === currentSong.id);
    let newId = currentId + 1;
    if (newId === songs.length) {
      newId = 0;
    }
    currentSong.isActive = false;
    songs[newId].isActive = true;
    await setCurrentSong(songs[newId]);
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }
  };

  return (
    <AppContainer className="App" isLibraryOpen={isLibraryOpen} >
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
        onEnded={songEndHandler}
        ref={audioRef}
        src={currentSong.audioUrl}
      ></audio>
    </AppContainer>
  );
};

export default App;
