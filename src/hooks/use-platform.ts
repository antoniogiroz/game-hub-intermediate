import { usePlatforms } from "./use-platforms";

export function usePlatform(id?: number) {
  const { data } = usePlatforms();

  return data?.results.find((platform) => platform.id === id);
}
