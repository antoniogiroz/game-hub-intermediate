import { useData } from "./use-data";

export interface Genre {
  id: string;
  name: string;
}

export function useGenres() {
  return useData<Genre>("/genres");
}
