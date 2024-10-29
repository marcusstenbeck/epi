import { Checkbox } from '@/components/ui/Checkbox';
import { Link } from '@tanstack/react-router';
import { ChevronRightIcon } from 'lucide-react';

export function HighlightTrackDialogTitle({ title }: { title: string }) {
  return (
    <span className="text-neutral-500">
      Add <span className="text-white">{title}</span> to playlist
    </span>
  );
}

export function PlaylistCheckboxRow({
  id,
  name,
  isTrackInPlaylist,
  onAddOrRemove,
}: {
  id: string;
  name: string;
  isTrackInPlaylist: boolean;
  onAddOrRemove: (action: 'add' | 'remove') => void;
}) {
  return (
    <div className="flex justify-between">
      <div className="flex items-center space-x-2">
        <Checkbox
          id={id}
          checked={isTrackInPlaylist}
          onCheckedChange={(newCheckedValue) => {
            if (newCheckedValue === true && isTrackInPlaylist) return;
            if (newCheckedValue === false && !isTrackInPlaylist) return;

            onAddOrRemove(newCheckedValue ? 'add' : 'remove');
          }}
        />
        <label
          htmlFor={id}
          className="text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {name}
        </label>
      </div>

      <Link to="/playlists/$id" params={{ id }}>
        <ChevronRightIcon className="h-4 w-4" />
      </Link>
    </div>
  );
}
