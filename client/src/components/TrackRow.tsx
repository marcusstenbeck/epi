import { Track } from '../openapi/requests';
import styles from './TrackRow.module.css';

type TrackRowProps = {
  track: Track;
  onPlay: (track: Track) => void;
};

export function TrackRow({ track, onPlay }: TrackRowProps) {
  return (
    <div className={styles.trackRow}>
      <button className={styles.trackPlay} onClick={() => onPlay(track)}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 12L8 5V19L20 12Z" fill="white" />
        </svg>
      </button>
      <div className={styles.trackInfo}>
        <div className={styles.trackTitle}>{track.title}</div>
        <div className={styles.trackArtist}>
          {track.main_artists.join(', ')}
        </div>
      </div>
    </div>
  );
}
