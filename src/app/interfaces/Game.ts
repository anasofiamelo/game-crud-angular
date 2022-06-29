export interface Game {
  title: string;
  description: string;
  _id: string;
  photos?: Object[];
  videos?: Object[];
  mediumPrice?: number;
  studio?: number;
  company?: number;
  releaseYear?: number;
  genres?: string[];
  platforms?: string[];
  tags?: string[];
}
