import { Company } from "./Company";
import { Photo } from "./Photo";
import { Studio } from "./Studio";
export interface Game {
  _id?: string;
  title: string;
  description: string;
  mainPhoto?: Photo;
  photos?: Photo[];
  videos?: Object[];
  mediumPrice?: number;
  studio?: Studio;
  productor?: string;
  company?: Company;
  releaseYear?: number;
  genres?: string[];
  platforms?: string[];
  tags?: string[];
  rating?: number;
  resume?: string;
  totalVotes?: number
}
