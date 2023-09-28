import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../services/api-client";
import genres from "../data/genres";

const apiClient = new ApiClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export function useGenres() {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 1000 * 60 * 60 * 24,
    initialData: genres,
  });
}
