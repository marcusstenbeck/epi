import { createFileRoute } from '@tanstack/react-router';
import { ensureUsePlaylistsRetrieveData } from '../openapi/queries/ensureQueryData';
import { usePlaylistsRetrieve } from '../openapi/queries';

export const Route = createFileRoute('/playlist/$id')({
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

  return <pre>{JSON.stringify(playlist, null, 2)}</pre>;
}
