import { Track } from '../openapi/requests';
import { cx } from '../utils/cx';

const styles = {
  trackRow: cx(
    'flex items-center h-20 border-b border-neutral-800',
    'last:border-b-0'
  ),
  trackPlay: cx(
    'flex items-center justify-center',
    'w-12 h-12 rounded-full bg-neutral-800 shadow-none mr-4'
  ),
  trackTitle: cx('font-semibold'),
  trackArtist: cx('text-neutral-500'),
};

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
      <div>
        <div className={styles.trackTitle}>{track.title}</div>
        <div className={styles.trackArtist}>
          {track.main_artists.join(', ')}
        </div>
      </div>
    </div>
  );
}
