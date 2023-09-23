import { useData } from "./use-data";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export function usePlatforms() {
  return useData<Platform>("/platforms/lists/parents");
}
