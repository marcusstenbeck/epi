import { useState } from 'react';
import styles from './App.module.css';
import logo from './assets/logo.svg';

import TrackRow from './components/TrackRow';
import AudioPlayer from './components/AudioPlayer';

import { useTracksList } from './openapi/queries';

function App() {
  const [currentTrack, setCurrentTrack] = useState();

  const { data: tracks } = useTracksList();

  const handlePlay = (track: any) => setCurrentTrack(track);

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
          <TrackRow key={ix} track={track} handlePlay={handlePlay} />
        ))}
      </main>
      {currentTrack && <AudioPlayer track={currentTrack} />}
    </>
  );
}

export default App;
