import { useEffect, useRef, useState } from 'react';
import { Track } from '../openapi/requests';
import styles from './AudioPlayer.module.css';

type AudioPlayerProps = {
  track: Track;
};

export function AudioPlayer({ track }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleTimeUpdate: React.ChangeEventHandler<HTMLAudioElement> = (
    event
  ) => {
    setProgress(event.target.currentTime / event.target.duration);
  };

  const handleSliderChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime =
      (parseInt(event.target.value, 10) / 1000) * audioRef.current.duration;
  };

  const handleTogglePlaybackClick = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.play();
    audioRef.current.currentTime = 0;
  }, [track]);

  return (
    <>
      <audio
        src={track.audio}
        ref={audioRef}
        onPlay={handlePlay}
        onPause={handlePause}
        onTimeUpdate={handleTimeUpdate}
      />
      <div className={styles.audioPlayer}>
        <button
          className={styles.togglePlaybackButton}
          onClick={handleTogglePlaybackClick}
        >
          {isPlaying ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 5H7V19H10V5ZM17 5H14V19H17V5Z"
                fill="#000"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 12L8 5V19L20 12Z" fill="#000" />
            </svg>
          )}
        </button>
        <div className={styles.trackInfo}>
          <div className={styles.trackTitle}>{track.title}</div>
          <div className={styles.trackArtist}>
            {track.main_artists.join(', ')}
          </div>
        </div>
        <div className={styles.sliderContainer}>
          <input
            type="range"
            min="1"
            max="1000"
            value={progress * 1000}
            className={styles.slider}
            onChange={handleSliderChange}
          />
        </div>
      </div>
    </>
  );
}
