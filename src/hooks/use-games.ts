import { useInfiniteQuery } from "@tanstack/react-query";
import { Genre } from "./use-genres";
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
  genre?: Genre;
  platform?: Platform;
  sortOrder?: string;
  page?: number;
}

export function useGames(filter: GameFilter = {}) {
  const queryFilter = {
    genres: filter.genre?.id,
    parent_platforms: filter.platform?.id,
    ordering: filter.sortOrder,
    search: filter.searchText,
  };

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", queryFilter],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          ...queryFilter,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, pages) => {
      return lastPage.next ? pages.length + 1 : undefined;
    },
  });
}
