export interface ISongInfo {
  currentTime: number;
  duration: number;
  animationPercentage: number;
}

export interface ISong {
    name: string;
    coverUrl: string;
    artist: string;
    audioUrl: string;
    colours: string[];
    id: string;
    isActive: boolean;
}

