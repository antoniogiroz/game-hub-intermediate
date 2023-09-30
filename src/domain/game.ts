import { Platform } from "./platform";

export interface Game {
  id: string;
  slug: string;
  name: string;
  description_raw: string;
  background_image: string;
  parent_platforms: [{ platform: Platform }];
  metacritic: number;
  rating_top: number;
}
