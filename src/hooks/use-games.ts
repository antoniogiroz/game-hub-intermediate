import { useData } from "./use-data";
import { Genre } from "./use-genres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: string;
  name: string;
  background_image: string;
  parent_platforms: [{ platform: Platform }];
  metacritic: number;
}

export function useGames(genre?: Genre) {
  return useData<Game>(
    "/games",
    {
      params: {
        genres: genre?.id,
      },
    },
    [genre?.id]
  );
}
