import { useState } from 'react';
import styles from './App.module.css';
import logo from './assets/logo.svg';

import { TrackRow } from './components/TrackRow';
import { AudioPlayer } from './components/AudioPlayer';

import { useTracksList } from './openapi/queries';
import { Track } from './openapi/requests';

function App() {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);

  const { data: tracks } = useTracksList();

  const handlePlay = (track: Track) => setCurrentTrack(track);

  return (
    <>
      <main className={styles.app}>
        <nav>
          <img src={logo} className={styles.logo} alt="Logo" />
          <ul className={styles.menu}>
            <li>
              <a href="#" className={styles.active}>
                Tracks
              </a>
            </li>
            <li>
              <a href="#">Playlists</a>
            </li>
          </ul>
        </nav>
        {tracks?.map((track, ix) => (
          <TrackRow key={ix} track={track} onPlay={handlePlay} />
        ))}
      </main>
      {currentTrack && <AudioPlayer track={currentTrack} />}
    </>
  );
}

export default App;
