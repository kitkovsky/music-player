import React from "react";
import styled from "styled-components";
import ISong from "../global/song.interface";
import LibrarySong from "./LibrarySong";

const LibraryContainer = styled.div<StyleProps>`
  transform: ${(props) =>
    props.isLibraryOpen ? "translateX(0%)" : "translateX(-100%)"};
  opacity: ${(props) => (props.isLibraryOpen ? "1" : "0")};
  position: fixed;
  top: 0;
  left: 0;
  width: 30%;
  height: 100%;
  box-shadow: 2px 2px 50px rgb(204, 204, 204);
  overflow: scroll;
  background-color: white;
  transition: all 0.5s ease;
  
  h2 {
    padding: 2rem;
    z-index: -1;
  }

  @media screen and (max-width: 850px) {
    width: 100%;
  }
`;

interface Props {
  songs: ISong[];
  currentSong: ISong;
  setCurrentSong: React.Dispatch<React.SetStateAction<ISong>>;
  audioRef: React.RefObject<HTMLAudioElement>;
  isPlaying: boolean;
  isLibraryOpen: boolean;
}

interface StyleProps {
  isLibraryOpen: boolean;
}

const Library: React.FC<Props> = ({
  songs,
  currentSong,
  setCurrentSong,
  audioRef,
  isPlaying,
  isLibraryOpen,
}) => {
  return (
    <LibraryContainer isLibraryOpen={isLibraryOpen}>
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
