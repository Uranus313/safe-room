import { GameQuery } from "../App";
import useDataList from "./useDataList";

export interface Platform{
    id: number;
    name : string;
    slug : string;
  }
  interface Game{
      id: number;
      name: string;
      background_image: string;
      metacritic: number;
      parent_platforms : {platform : Platform}[]
    }

const useGame = (gameQuery : GameQuery) =>{
         return useDataList<Game>("/games",{params:{ genres: gameQuery.genre?.id,
        platforms : gameQuery.platform?.id, ordering: gameQuery.order, search: gameQuery.search}},[gameQuery])
}    
export default useGame