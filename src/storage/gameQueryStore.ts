import { create } from "zustand";
interface GameQuery{
    genre_id: number | null;
    platform_id: number | null;
    order: string;
    search : string;
  }
  

interface GameQueryStore {
    gameQuery : GameQuery;
    setGenreId : (genre_id : number | null) => void;
    setPlatformId : (platform_id : number | null) => void;
    setSearchText : (searchText : string) => void;
    setOrdering : (ordering : string) => void;
}
const useGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery : {} as GameQuery,
    setSearchText : (searchText) => set({gameQuery : {search: searchText , genre_id: null, platform_id: null, order: ""} }),
    setPlatformId : (platform_id) => set( store => ({gameQuery : {...store.gameQuery, platform_id}})),
    setGenreId : (genre_id) => set(store => ({gameQuery : {...store.gameQuery, genre_id}})),
    setOrdering : (ordering) => set(store => ({gameQuery : {...store.gameQuery, order: ordering}}))
}))
export default useGameQueryStore;