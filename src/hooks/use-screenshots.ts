import { useQuery } from "@tanstack/react-query";
import { Screenshot } from "../domain/screenshot";
import { ApiClient } from "../services/api-client";

export function useScreenshots(gameId: number) {
  const apiClient = new ApiClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
}
