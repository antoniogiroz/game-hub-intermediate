import { useGenres } from "./use-genres";

export function useGenre(id?: number) {
  const { data } = useGenres();

  return data?.results.find((genre) => genre.id === id);
}
