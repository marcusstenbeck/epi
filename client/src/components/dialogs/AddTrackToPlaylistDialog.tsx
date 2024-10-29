import { CreatePlaylistWithTrackForm } from '@/components/forms/CreatePlaylistWithTrackForm';
import { Button } from '@/components/ui/Button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/Dialog';
import {
  usePlaylistsList,
  UsePlaylistsListKeyFn,
  usePlaylistsPartialUpdate,
  UsePlaylistsRetrieveKeyFn,
} from '@/openapi/queries';
import { Playlist, Track } from '@/openapi/requests';
import { useQueryClient } from '@tanstack/react-query';
import { ListMusicIcon } from 'lucide-react';
import {
  HighlightTrackDialogTitle,
  PlaylistCheckboxRow,
} from './AddTrackToPlaylistDialog.components';

export function AddTrackToPlaylistDialog({ track }: { track: Track }) {
  const queryClient = useQueryClient();
  const { data: playlists } = usePlaylistsList();
  const playlistUpdateMutation = usePlaylistsPartialUpdate();

  function handleAddOrRemoveTrackFromPlaylist(
    playlist: Playlist,
    action: 'add' | 'remove'
  ) {
    const tracksSet = new Set(playlist.tracks);

    switch (action) {
      case 'add': {
        tracksSet.add(track.id);
        break;
      }

      case 'remove': {
        tracksSet.delete(track.id);
        break;
      }
    }

    playlistUpdateMutation.mutate(
      {
        path: { id: playlist.id },
        body: { tracks: [...tracksSet] },
      },
      {
        onSuccess() {
          queryClient.invalidateQueries({ queryKey: UsePlaylistsListKeyFn() });
          queryClient.invalidateQueries({
            queryKey: UsePlaylistsRetrieveKeyFn({ path: { id: track.id } }),
          });
        },
      }
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <ListMusicIcon className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            <HighlightTrackDialogTitle title={track.title} />
          </DialogTitle>
        </DialogHeader>

        {playlists?.map((playlist) => (
          <PlaylistCheckboxRow
            key={playlist.id}
            id={String(playlist.id)}
            isTrackInPlaylist={playlist.tracks.includes(track.id)}
            name={playlist.name}
            onAddOrRemove={(action) =>
              handleAddOrRemoveTrackFromPlaylist(playlist, action)
            }
          />
        ))}

        <CreatePlaylistWithTrackForm trackId={track.id} />
      </DialogContent>
    </Dialog>
  );
}
