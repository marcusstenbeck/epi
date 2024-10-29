import { Track } from '@/openapi/requests';

type AudioPlayerState = {
  currentTrack?: Track;
  progress: number;
  isPlaying: boolean;
};

export class AudioPlayer {
  private listeners = new Set<() => void>();
  private _state: AudioPlayerState = {
    isPlaying: false,
    progress: 0,
  };
  private audioElement = document.createElement('audio');

  constructor() {
    document.body.appendChild(this.audioElement);
    this.audioElement.addEventListener('timeupdate', this.onTimeUpdate);
    this.audioElement.addEventListener('play', this.onPlayPause);
    this.audioElement.addEventListener('pause', this.onPlayPause);
  }

  get state() {
    return this._state;
  }

  private setState(newState: AudioPlayerState) {
    this._state = newState;
    this.notify();
  }

  private onTimeUpdate = () => {
    this.setState({
      ...this._state,
      progress: this.audioElement.currentTime / this.audioElement.duration,
    });
  };

  private onPlayPause = () => {
    this.setState({
      ...this._state,
      isPlaying: !this.audioElement.paused,
    });
  };

  subscribe = (listener: () => void) => {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  };

  private notify() {
    for (const listener of this.listeners) {
      listener();
    }
  }

  playTrack(track: Track) {
    if (track.id === this._state.currentTrack?.id) {
      this.togglePlay();
      return;
    }

    this.setState({ ...this._state, currentTrack: track });
    this.audioElement.src = track.audio;
    this.play();
  }

  seekProgress(newProgress: number) {
    this.audioElement.currentTime = newProgress * this.audioElement.duration;
  }

  togglePlay() {
    if (this.audioElement.paused) {
      this.play();
    } else {
      this.pause();
    }
  }

  play() {
    this.audioElement.play();
  }

  pause() {
    this.audioElement.pause();
  }
}
