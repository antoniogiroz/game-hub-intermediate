import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../services/api-client";
import platforms from "../data/platforms";
import { Platform } from "../domain/platform";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

export function usePlatforms() {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 1000 * 60 * 60 * 24,
    initialData: platforms,
  });
}
