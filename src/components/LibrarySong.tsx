import React from "react";
import styled from "styled-components";
import ISong from "../global/song.interface";
import { playAudio } from "../global/utils";

const LibrarySongContainer = styled.div<StyleProps>`
  background-color: ${(props) => (props.isActive ? "lightblue" : "white")};
  display: flex;
  align-items: center;
  padding: 1rem 2rem 1rem 2rem;
  height: 10rem;
  cursor: pointer;
  img {
    width: 7rem;
  }
  &:hover {
    background: lightblue;
  }
`;

const SongDescription = styled.div`
  padding-left: 1rem;
  h3 {
    font-size: 2rem;
  }
  h4 {
    font-size: 1.2rem;
  }
`;

interface Props {
  song: ISong;
  currentSong: ISong;
  setCurrentSong: React.Dispatch<React.SetStateAction<ISong>>;
  audioRef: React.RefObject<HTMLAudioElement>;
  isPlaying: boolean;
}

interface StyleProps {
  isActive: boolean;
}

const LibrarySong: React.FC<Props> = ({
  song,
  currentSong,
  setCurrentSong,
  audioRef,
  isPlaying,
}) => {
  const selectSongHandler = () => {
    currentSong.isActive = false;
    song.isActive = true;
    setCurrentSong(song);
    playAudio(isPlaying, audioRef);
  };

  return (
    <LibrarySongContainer isActive={song.isActive} onClick={selectSongHandler}>
      <img alt={song.name} src={song.coverUrl}></img>
      <SongDescription>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </SongDescription>
    </LibrarySongContainer>
  );
};

export default LibrarySong;
