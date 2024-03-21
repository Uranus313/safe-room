import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import gameAPIClient, { FetchedData } from "../connections/gameAPIClient";

import { Platform } from "./usePlatform";


  interface Game{
      id: number;
      name: string;
      background_image: string;
      metacritic: number;
      parent_platforms : {platform : Platform}[]
    }

const useGame = (gameQuery : GameQuery) =>{
  const fetchGames = () => gameAPIClient
  .get<FetchedData<Game>>('/games',{params:{ genres: gameQuery.genre?.id,
    platforms : gameQuery.platform?.id, ordering: gameQuery.order, search: gameQuery.search}})
  .then(res => res.data);
  return useQuery<FetchedData<Game>,Error>({
    queryKey: ['games',gameQuery],
    queryFn : fetchGames,
    staleTime : 20000,
    
    // initialData: { count : genres.length, results : genres }
  })
}    
export default useGame