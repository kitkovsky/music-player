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
}

const Library: React.FC<Props> = ({ songs }) => {
  return (
    <LibraryContainer>
      <h2>Library</h2>
      {songs.map((song) => (
        <LibrarySong song={song} />
      ))}
    </LibraryContainer>
  );
};

export default Library;
