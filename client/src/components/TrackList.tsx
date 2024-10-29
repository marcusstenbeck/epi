import { cn } from '@/lib/utils';
import { PauseIcon, PlayIcon } from 'lucide-react';
import { PropsWithChildren } from 'react';

function BaseTrackList({ children }: React.PropsWithChildren) {
  return <>{children}</>;
}

function ItemContainer({ children }: React.PropsWithChildren) {
  return (
    <div
      className={cn(
        'flex items-center h-20 gap-4',
        'border-b border-neutral-800',
        'last:border-b-0'
      )}
    >
      {children}
    </div>
  );
}

function PlayButton({
  isPlaying,
  onTogglePlay,
}: {
  isPlaying: boolean;
  onTogglePlay: (playing: boolean) => void;
}) {
  return (
    <button
      className={cn(
        'flex items-center justify-center',
        'w-12 h-12 rounded-full bg-neutral-800 shadow-none'
      )}
      onClick={() => onTogglePlay(!isPlaying)}
    >
      {/* <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 12L8 5V19L20 12Z" fill="white" />
      </svg> */}
      {isPlaying ? <PauseIcon /> : <PlayIcon />}
    </button>
  );
}

function Info({ title, author }: { title: string; author: string }) {
  return (
    <div className="flex-1">
      <div className="font-semibold">{title}</div>
      <div className="text-neutral-500">{author}</div>
    </div>
  );
}

function ActionsContainer({ children }: PropsWithChildren) {
  return <div className="flex items-center">{children}</div>;
}

export const TrackList = Object.assign(BaseTrackList, {
  ItemContainer,
  PlayButton,
  Info,
  ActionsContainer,
});
