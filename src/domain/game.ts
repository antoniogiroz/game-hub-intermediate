import { Genre } from "./genre";
import { Platform } from "./platform";
import { Publisher } from "./publisher";

export interface Game {
  id: number;
  slug: string;
  name: string;
  genres: Genre[];
  publishers: Publisher[];
  description_raw: string;
  background_image: string;
  parent_platforms: [{ platform: Platform }];
  metacritic: number;
  rating_top: number;
}
