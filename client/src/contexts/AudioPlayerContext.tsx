import { AudioPlayer } from '@/lib/AudioPlayer';
import React, { useSyncExternalStore } from 'react';

const AudioPlayerContext = React.createContext<AudioPlayer>(
  null as unknown as AudioPlayer
);

export function useAudioPlayer() {
  const audioPlayer = React.useContext(AudioPlayerContext);
  if (!audioPlayer) {
    throw new Error('useAudioPlayer() must be used in an <AudioPlayerContext>');
  }
  return audioPlayer;
}

export function useAudioPlayerState() {
  const audioPlayer = useAudioPlayer();
  return useSyncExternalStore(audioPlayer.subscribe, () => audioPlayer.state);
}

let audioPlayerInstance: AudioPlayer;

export function AudioPlayerContextProvider({
  children,
}: React.PropsWithChildren) {
  if (!audioPlayerInstance) {
    audioPlayerInstance = new AudioPlayer();
  }
  return (
    <AudioPlayerContext.Provider value={audioPlayerInstance}>
      {children}
    </AudioPlayerContext.Provider>
  );
}
