import React from "react";
import styled from "styled-components";
import ISong from "../global/song.interface";

const LibrarySongContainer = styled.div`
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
  setCurrentSong: React.Dispatch<React.SetStateAction<ISong>>;
  audioRef: React.RefObject<HTMLAudioElement>;
  isPlaying: boolean;
}

const LibrarySong: React.FC<Props> = ({
  song,
  setCurrentSong,
  audioRef,
  isPlaying,
}) => {
  const selectSongHandler = () => {
    setCurrentSong(song);
    if (audioRef.current && isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          if (audioRef.current) {
            audioRef.current.play();
          }
        });
      }
    }
  };

  return (
    <LibrarySongContainer onClick={selectSongHandler}>
      <img alt={song.name} src={song.coverUrl}></img>
      <SongDescription>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </SongDescription>
    </LibrarySongContainer>
  );
};

export default LibrarySong;
