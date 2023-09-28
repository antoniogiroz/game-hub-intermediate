import { useInfiniteQuery } from "@tanstack/react-query";
import { Platform } from "./use-platforms";
import { ApiClient, FetchResponse } from "../services/api-client";

const apiClient = new ApiClient<Game>("/games");

export interface Game {
  id: string;
  name: string;
  background_image: string;
  parent_platforms: [{ platform: Platform }];
  metacritic: number;
  rating_top: number;
}

export interface GameFilter {
  searchText?: string;
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
}

export function useGames(filter: GameFilter = {}) {
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", filter],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: filter.genreId,
          parent_platforms: filter.platformId,
          ordering: filter.sortOrder,
          search: filter.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, pages) => {
      return lastPage.next ? pages.length + 1 : undefined;
    },
    staleTime: 1000 * 60 * 60 * 24,
  });
}
