import { AddTrackToPlaylistDialog } from '@/components/dialogs/AddTrackToPlaylistDialog';
import { TrackList } from '@/components/TrackList';
import {
  useAudioPlayer,
  useAudioPlayerState,
} from '@/contexts/AudioPlayerContext';
import { ensureUseTracksListData } from '@/openapi/queries/ensureQueryData';
import { useTracksListSuspense } from '@/openapi/queries/suspense';
import { Track } from '@/openapi/requests';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  loader: ({ context: { queryClient } }) =>
    ensureUseTracksListData(queryClient),
  component: IndexComponent,
});

function IndexComponent() {
  const audioPlayer = useAudioPlayer();
  const audioPlayerState = useAudioPlayerState();
  const { data: tracks } = useTracksListSuspense();

  const currentTrack = audioPlayerState.currentTrack;
  const isPlaying = audioPlayerState.isPlaying;

  function handlePlay(track: Track) {
    audioPlayer.playTrack(track);
  }

  return (
    <>
      <TrackList>
        {tracks?.map((track) => {
          const isPlayingTrack = isPlaying && track.id === currentTrack?.id;

          return (
            <TrackList.ItemContainer key={track.id}>
              <TrackList.PlayButton
                isPlaying={isPlayingTrack}
                onTogglePlay={() => handlePlay(track)}
              />
              <TrackList.Info
                title={track.title}
                author={track.main_artists.join(', ')}
              />
              <TrackList.ActionsContainer>
                <AddTrackToPlaylistDialog track={track} />
              </TrackList.ActionsContainer>
            </TrackList.ItemContainer>
          );
        })}
      </TrackList>
    </>
  );
}
