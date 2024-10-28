import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { AudioPlayer } from '../components/AudioPlayer';
import { TrackRow } from '../components/TrackRow';
import { ensureUseTracksListData } from '../openapi/queries/ensureQueryData';
import { useTracksListSuspense } from '../openapi/queries/suspense';
import { Track } from '../openapi/requests';

export const Route = createFileRoute('/')({
  loader: ({ context: { queryClient } }) =>
    ensureUseTracksListData(queryClient),
  component: IndexComponent,
});

function IndexComponent() {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const { data: tracks } = useTracksListSuspense();

  const handlePlay = (track: Track) => setCurrentTrack(track);

  return (
    <>
      {tracks?.map((track, ix) => (
        <TrackRow key={ix} track={track} onPlay={handlePlay} />
      ))}

      {currentTrack && <AudioPlayer track={currentTrack} />}
    </>
  );
}
