import {
  useAudioPlayer,
  useAudioPlayerState,
} from '@/contexts/AudioPlayerContext';
import { cn } from '@/lib/utils';

const styles = {
  audioPlayer: cn(
    'fixed bottom-2 left-2 right-2 h-20 bg-neutral-800 rounded-md flex items-center'
  ),
  togglePlaybackButton: cn(
    'flex items-center justify-center',
    'w-12 h-12 rounded-full bg-white shadow-none mx-6 ml-4'
  ),
  trackInfo: cn('w-48'),
  trackTitle: cn('font-semibold'),
  trackArtist: cn('text-gray-500'),
  sliderContainer: cn('flex-grow mr-6'),
  slider: cn('w-full'),
};

export function AudioPlayerBar() {
  const audioPlayer = useAudioPlayer();
  const { progress, isPlaying, currentTrack: track } = useAudioPlayerState();

  const handleSliderChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    audioPlayer.seekProgress(parseInt(event.target.value, 10) / 1000);
  };

  const handleTogglePlaybackClick = () => {
    if (audioPlayer.state.isPlaying) {
      audioPlayer.pause();
    } else {
      audioPlayer.play();
    }
  };

  if (!track) {
    return null;
  }

  return (
    <>
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
