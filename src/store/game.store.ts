import { create } from "zustand";

interface GameFilter {
  searchText?: string;
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
}

interface GameFilterStore {
  gameFilter: GameFilter;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameFilterStore = create<GameFilterStore>((set) => ({
  gameFilter: {},
  setSearchText: (searchText) => set(() => ({ gameFilter: { searchText } })),
  setGenreId: (genreId) =>
    set((store) => ({ gameFilter: { ...store.gameFilter, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameFilter: { ...store.gameFilter, platformId } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameFilter: { ...store.gameFilter, sortOrder } })),
}));

export default useGameFilterStore;
