
export type Mood = 'happy' | 'neutral' | 'sad' | null;

export interface Quote {
  text: string;
  author?: string;
}

export interface CatPosition {
  id: number;
  x: number;
  y: number;
  scale: number;
  direction: 'left' | 'right';
  speed: number;
}
