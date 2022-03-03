export const playAudio = (
  isPlaying: boolean,
  audioRef: React.RefObject<HTMLAudioElement>
) => {
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
