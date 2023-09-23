import { useData } from "./use-data";
import { Genre } from "./use-genres";
import { Platform } from "./use-platforms";

export interface Game {
  id: string;
  name: string;
  background_image: string;
  parent_platforms: [{ platform: Platform }];
  metacritic: number;
}

export function useGames(genre?: Genre, platform?: Platform) {
  return useData<Game>(
    "/games",
    {
      params: {
        genres: genre?.id,
        platforms: platform?.id,
      },
    },
    [genre?.id, platform?.id]
  );
}
