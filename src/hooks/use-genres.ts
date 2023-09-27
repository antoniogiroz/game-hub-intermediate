import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Genre {
  id: string;
  name: string;
  image_background: string;
}

export function useGenres() {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Genre>>("/genres")
        .then((response) => response.data.results),
    staleTime: 1000 * 60 * 60 * 24,
  });
}
