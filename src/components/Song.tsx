import React from "react";
import styled from "styled-components";
import ISong from "../global/song.interface";

const SongContainer = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 25%;
    border-radius: 50%;
  }
  h2 {
    padding: 3rem 1rem 1rem 1rem;
  }
  @media screen and (max-width: 850px) {
    img {
      width: 40%;
    }
  }
  @media screen and (max-width: 550px) {
    img {
      width: 60%;
    }
  }
`;

interface Props {
  currentSong: ISong;
}

const Song: React.FC<Props> = ({ currentSong }) => {
  return (
    <SongContainer>
      <img alt={currentSong.name} src={currentSong.coverUrl}></img>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </SongContainer>
  );
};

export default Song;
