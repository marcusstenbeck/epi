import { DeletePlaylistAlertDialog } from '@/components/dialogs/DeletePlaylistAlertDialog';
import { NewPlaylistForm } from '@/components/forms/NewPlaylistForm';
import { Button } from '@/components/ui/Button';
import { ensureUsePlaylistsListData } from '@/openapi/queries/ensureQueryData';
import { usePlaylistsListSuspense } from '@/openapi/queries/suspense';
import { createFileRoute, Link } from '@tanstack/react-router';
import { Trash } from 'lucide-react';
import React from 'react';

export const Route = createFileRoute('/playlists/')({
  loader: ({ context: { queryClient } }) =>
    ensureUsePlaylistsListData(queryClient),
  component: PlaylistsComponent,
});

function PlaylistsComponent() {
  const { data: playlists } = usePlaylistsListSuspense();

  return (
    <div className="space-y-2">
      <NewPlaylistForm />

      {playlists?.map((playlist) => (
        <React.Fragment key={playlist.id}>
          <div className="space-x-4">
            <Link to="/playlists/$id" params={{ id: String(playlist.id) }}>
              {playlist.name} ({playlist.tracks.length})
            </Link>
            <DeletePlaylistAlertDialog playlist={playlist}>
              <Button variant="destructive" size="icon">
                <Trash />
              </Button>
            </DeletePlaylistAlertDialog>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
