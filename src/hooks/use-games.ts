import { useInfiniteQuery } from "@tanstack/react-query";
import { Platform } from "./use-platforms";
import { ApiClient, FetchResponse } from "../services/api-client";
import useGameFilterStore from "../store/game.store";

const apiClient = new ApiClient<Game>("/games");

export interface Game {
  id: string;
  name: string;
  background_image: string;
  parent_platforms: [{ platform: Platform }];
  metacritic: number;
  rating_top: number;
}

export function useGames() {
  const gameFilter = useGameFilterStore((s) => s.gameFilter);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameFilter],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameFilter.genreId,
          parent_platforms: gameFilter.platformId,
          ordering: gameFilter.sortOrder,
          search: gameFilter.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, pages) => {
      return lastPage.next ? pages.length + 1 : undefined;
    },
    staleTime: 1000 * 60 * 60 * 24,
  });
}
