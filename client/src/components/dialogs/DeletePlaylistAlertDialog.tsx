import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/AlertDialog';
import { usePlaylistsDestroy, UsePlaylistsListKeyFn } from '@/openapi/queries';
import { Playlist } from '@/openapi/requests';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

export function DeletePlaylistAlertDialog({
  playlist,
  children,
}: {
  playlist: Playlist;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const queryClient = useQueryClient();
  const destroyPlaylistMutation = usePlaylistsDestroy();

  function handleDelete() {
    destroyPlaylistMutation.mutate(
      { path: { id: playlist.id } },
      {
        onSuccess() {
          queryClient.invalidateQueries({
            queryKey: UsePlaylistsListKeyFn(),
          });
          setOpen(false);
        },
      }
    );
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This will delete the{' '}
            <span className="text-white">{playlist.name}</span> playlist. This
            action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={(e) => {
              e.preventDefault();
              handleDelete();
            }}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
