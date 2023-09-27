import { useQuery } from "@tanstack/react-query";
import { Genre } from "./use-genres";
import { Platform } from "./use-platforms";
import { ApiClient } from "../services/api-client";

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
}

export function useGames(filter: GameFilter = {}) {
  const params = {
    genres: filter.genre?.id,
    parent_platforms: filter.platform?.id,
    ordering: filter.sortOrder,
    search: filter.searchText,
  };

  return useQuery<Game[], Error>({
    queryKey: ["games", params],
    queryFn: () => apiClient.getAll({ params }),
  });
}
