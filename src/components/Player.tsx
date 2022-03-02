import React, { useRef }from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import ISong from "../global/song.interface";

const PlayerContainer = styled.div`
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const TimeControl = styled.div`
  width: 50%;
  display: flex;
  input {
    width: 100%;
    padding: 1rem 2rem;
  }
  p {
    padding: 1rem;
  }
`;

const PlayControl = styled.div`
  width: 30rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  svg {
    cursor: pointer;
  }
`;

interface Props {
  currentSong: ISong;
}

const Player: React.FC<Props> = ({ currentSong }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const playSongHandler = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }

  return (
    <PlayerContainer>
      <TimeControl>
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </TimeControl>
      <PlayControl>
        <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon onClick={playSongHandler} className="play" icon={faPlay} size="2x" />
        <FontAwesomeIcon
          className="skip-forward"
          icon={faAngleRight}
          size="2x"
        />
      </PlayControl>
      <audio ref={audioRef} src={currentSong.audioUrl}></audio>
    </PlayerContainer>
  );
};

export default Player;
