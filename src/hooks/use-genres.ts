import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../services/api-client";
import genres from "../data/genres";
import { Genre } from "../domain/genre";

const apiClient = new ApiClient<Genre>("/genres");

export function useGenres() {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 1000 * 60 * 60 * 24,
    initialData: genres,
  });
}
