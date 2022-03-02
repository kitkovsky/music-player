import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

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

const Player = () => {
  return (
    <PlayerContainer>
      <TimeControl>
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </TimeControl>
      <PlayControl>
        <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon className="play" icon={faPlay} size="2x" />
        <FontAwesomeIcon
          className="skip-forward"
          icon={faAngleRight}
          size="2x"
        />
      </PlayControl>
    </PlayerContainer>
  );
};

export default Player;
