import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import ISongInfo from "../global/songInfo.interface";
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
  align-items: center;
  input[type="range"] {
    width: 100%;
    padding: 1rem 2rem;
    -webkit-appearance: none;
    background: transparent;
    cursor: pointer;
  }
  input[type="range"]:focus {
    outline: none;
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    opacity: 0;
  }
  input[type="range"]::-moz-range-thumb {
    -webkit-appearance: none;
    opacity: 0;
  }
  p {
    padding: 1rem;
  }
`;

const Track = styled.div<TrackProps>`
  width: 100%;
  height: 2rem;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  background: ${(props) =>
    `linear-gradient(to right, ${props.currentSong.colours[0]}, ${props.currentSong.colours[1]})`};
`;

const AnimateTrack = styled.div<AnimateTrackProps>`
  background: rgb(204, 204, 204);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: ${(props) => `translateX(${props.songInfo.animationPercentage}%)`};
  pointer-events: none;
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

type Direction = "backward" | "forward";

interface Props {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  audioRef: React.RefObject<HTMLAudioElement>;
  songInfo: ISongInfo;
  setSongInfo: React.Dispatch<React.SetStateAction<ISongInfo>>;
  songs: ISong[];
  currentSong: ISong;
  setCurrentSong: React.Dispatch<React.SetStateAction<ISong>>;
}

interface AnimateTrackProps {
  songInfo: ISongInfo;
}

interface TrackProps {
  currentSong: ISong;
}

const Player: React.FC<Props> = ({
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  songs,
  currentSong,
  setCurrentSong,
}) => {
  const playSongHandler = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const dragHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = parseInt(event.target.value);
    }
    setSongInfo({ ...songInfo, currentTime: parseInt(event.target.value) });
  };

  const skipTrackHandler = async (direction: Direction) => {
    const currentId = songs.findIndex((song) => song.id === currentSong.id);
    let newId: number;
    if (direction === "forward") {
      newId = currentId + 1;
      if (newId === songs.length) {
        newId = 0;
      }
    } else {
      newId = currentId - 1;
      if (newId === -1) {
        newId = songs.length - 1;
      }
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

  const getTime = (time: number) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  return (
    <PlayerContainer>
      <TimeControl>
        <p>{getTime(songInfo.currentTime)}</p>
        <Track currentSong={currentSong}>
          <input
            onChange={(event) => dragHandler(event)}
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            type="range"
          />
          <AnimateTrack songInfo={songInfo}></AnimateTrack>
        </Track>
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </TimeControl>
      <PlayControl>
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("backward")}
          icon={faAngleLeft}
          size="2x"
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          icon={isPlaying ? faPause : faPlay}
          size="2x"
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("forward")}
          icon={faAngleRight}
          size="2x"
        />
      </PlayControl>
    </PlayerContainer>
  );
};

export default Player;
