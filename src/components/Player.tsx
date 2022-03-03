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
import { playAudio } from "../global/utils";

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

  const skipTrackHandler = (direction: Direction) => {
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
    setCurrentSong(songs[newId]);
    playAudio(isPlaying, audioRef);
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
        <input
          onChange={(event) => dragHandler(event)}
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          type="range"
        />
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
