import { useData } from "./use-data";

export interface Genre {
  id: string;
  name: string;
  image_background: string;
}

export function useGenres() {
  return useData<Genre>("/genres");
}
