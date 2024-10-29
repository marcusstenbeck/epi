import { Button } from '@/components/ui/Button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { blurActiveDocumentElement } from '@/lib/utils';
import { usePlaylistsCreate, UsePlaylistsListKeyFn } from '@/openapi/queries';
import { Playlist } from '@/openapi/requests';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { ListPlusIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const CreatePlaylistWithTrackFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Playlist name must be at least 2 characters.',
  }),
});

function useCreatePlaylistWithTrackForm() {
  return useForm<z.infer<typeof CreatePlaylistWithTrackFormSchema>>({
    resolver: zodResolver(CreatePlaylistWithTrackFormSchema),
    defaultValues: {
      name: '',
    },
  });
}

export function CreatePlaylistWithTrackForm({ trackId }: { trackId: string }) {
  const queryClient = useQueryClient();
  const playlistCreateMutation = usePlaylistsCreate();

  const form = useCreatePlaylistWithTrackForm();

  function handleSubmit({
    name,
  }: z.infer<typeof CreatePlaylistWithTrackFormSchema>) {
    playlistCreateMutation.mutate(
      {
        body: { name, tracks: [trackId] } as Playlist,
      },
      {
        onSuccess() {
          queryClient.invalidateQueries({ queryKey: UsePlaylistsListKeyFn() });
          form.reset();
          blurActiveDocumentElement();
        },
      }
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex w-full max-w-sm items-start space-x-2"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  placeholder="New playlist"
                  role="presentation"
                  autoComplete="off"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant="secondary" size="icon" type="submit">
          <ListPlusIcon />
        </Button>
      </form>
    </Form>
  );
}
