import { useInfiniteQuery } from "@tanstack/react-query";
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

  return useInfiniteQuery<FetchedData<Game>,Error>({
    queryKey: ['games',gameQuery],
    initialPageParam: 1,
    queryFn : ({pageParam = 1}) => gameAPIClient
    .get<FetchedData<Game>>('/games',{params:{ genres: gameQuery.genre_id,
      platforms : gameQuery.platform_id, 
      ordering: gameQuery.order, 
      search: gameQuery.search,
      page : pageParam}})
    .then(res => res.data),
    staleTime : 20000,
    getNextPageParam : (lastPage,allPages) => {
      return lastPage.next? allPages.length + 1 : undefined;
    }
  })
}    
export default useGame