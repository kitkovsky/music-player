import React from "react";
import styled from "styled-components";
import ISong from "../global/song.interface";
import LibrarySong from "./LibrarySong";

const LibraryContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 25rem;
  height: 100%;
  box-shadow: 2px 2px 50px rgb(204, 204, 204);
  overflow: scroll;
  h2 {
    padding: 2rem;
  }
`;

interface Props {
  songs: ISong[];
  currentSong: ISong;
  setCurrentSong: React.Dispatch<React.SetStateAction<ISong>>;
  audioRef: React.RefObject<HTMLAudioElement>;
  isPlaying: boolean;
}

const Library: React.FC<Props> = ({ songs, currentSong, setCurrentSong, audioRef, isPlaying }) => {
  return (
    <LibraryContainer>
      <h2>Library</h2>
      {songs.map((song) => (
        <LibrarySong
          song={song}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          key={song.id}
          audioRef={audioRef}
          isPlaying={isPlaying}
        />
      ))}
    </LibraryContainer>
  );
};

export default Library;
