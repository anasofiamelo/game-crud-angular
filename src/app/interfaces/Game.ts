import { Photo } from "./Photo";
export interface Game {
  _id: string;
  title: string;
  description: string;
  mainPhoto?: Photo;
  photos?: Photo[];
  videos?: Object[];
  mediumPrice?: number;
  studio?: number;
  company?: number;
  releaseYear?: number;
  genres?: string[];
  platforms?: string[];
  tags?: string[];
  rating?: number;
  resume?: string;
  totalVotes?: number
}
