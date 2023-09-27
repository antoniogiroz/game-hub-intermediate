import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../services/api-client";

const apiClient = new ApiClient<Genre>("/genres");

export interface Genre {
  id: string;
  name: string;
  image_background: string;
}

export function useGenres() {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 1000 * 60 * 60 * 24,
  });
}
