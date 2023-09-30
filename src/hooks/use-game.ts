import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../services/api-client";
import { Game } from "./use-games";

const apiClient = new ApiClient<Game>("/games");

export function useGame(slug: string) {
  return useQuery<Game, Error>({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
    staleTime: 1000 * 60 * 60 * 24,
  });
}
