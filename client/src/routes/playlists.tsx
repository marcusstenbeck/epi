import { createFileRoute, Link } from '@tanstack/react-router';
import { usePlaylistsListSuspense } from '../openapi/queries/suspense';
import { ensureUsePlaylistsListData } from '../openapi/queries/ensureQueryData';
import React from 'react';

export const Route = createFileRoute('/playlists')({
  loader: ({ context: { queryClient } }) =>
    ensureUsePlaylistsListData(queryClient),
  component: PlaylistsComponent,
});

function PlaylistsComponent() {
  const { data: playlists } = usePlaylistsListSuspense();

  return (
    <>
      {playlists?.map((playlist) => (
        <React.Fragment key={playlist.id}>
          <Link to="/playlist/$id" params={{ id: String(playlist.id) }}>
            {playlist.name} ({playlist.tracks.length})
          </Link>
        </React.Fragment>
      ))}
    </>
  );
}
