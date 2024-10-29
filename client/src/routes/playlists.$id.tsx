import { TrackList } from '@/components/TrackList';
import { Button } from '@/components/ui/Button';
import {
  useAudioPlayer,
  useAudioPlayerState,
} from '@/contexts/AudioPlayerContext';
import {
  UsePlaylistsListKeyFn,
  usePlaylistsPartialUpdate,
  usePlaylistsRetrieve,
  UsePlaylistsRetrieveKeyFn,
} from '@/openapi/queries';
import { ensureUsePlaylistsRetrieveData } from '@/openapi/queries/ensureQueryData';
import { Track } from '@/openapi/requests';
import { useQueryClient } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { Trash2 } from 'lucide-react';

export const Route = createFileRoute('/playlists/$id')({
  loader: ({ context: { queryClient }, params: { id } }) =>
    ensureUsePlaylistsRetrieveData(queryClient, {
      path: { id: parseInt(id, 10) },
    }),
  component: PlaylistComponent,
});

function PlaylistComponent() {
  const id = Route.useParams().id;
  const { data: playlist } = usePlaylistsRetrieve({
    path: { id: parseInt(id, 10) },
  });

  const queryClient = useQueryClient();
  const playlistUpdateMutation = usePlaylistsPartialUpdate();

  const audioPlayer = useAudioPlayer();
  const audioPlayerState = useAudioPlayerState();

  const currentTrack = audioPlayerState.currentTrack;
  const isPlaying = audioPlayerState.isPlaying;

  function handleRemoveTrackFromPlaylist(track: Track) {
    if (!playlist) return;

    const tracksSet = new Set(playlist.tracks.map(({ id }) => id));
    tracksSet.delete(track.id);

    playlistUpdateMutation.mutate(
      {
        path: { id: playlist.id },
        body: { tracks: [...tracksSet] },
      },
      {
        onSuccess() {
          queryClient.invalidateQueries({ queryKey: UsePlaylistsListKeyFn() });
          queryClient.invalidateQueries({
            queryKey: UsePlaylistsRetrieveKeyFn({ path: { id: playlist.id } }),
          });
        },
      }
    );
  }

  function handlePlay(track: Track) {
    audioPlayer.playTrack(track);
  }

  return (
    <>
      {playlist?.tracks.length === 0 && <>Empty playlist</>}

      <TrackList>
        {playlist?.tracks.map((track, ix) => {
          const isPlayingTrack = isPlaying && track.id === currentTrack?.id;

          return (
            <TrackList.ItemContainer key={ix}>
              <TrackList.PlayButton
                isPlaying={isPlayingTrack}
                onTogglePlay={() => handlePlay(track)}
              />
              <TrackList.Info
                title={track.title}
                author={track.main_artists.join(', ')}
              />
              <TrackList.ActionsContainer>
                <Button
                  onClick={() => handleRemoveTrackFromPlaylist(track)}
                  variant="outline"
                  size="icon"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TrackList.ActionsContainer>
            </TrackList.ItemContainer>
          );
        })}
      </TrackList>
    </>
  );
}
