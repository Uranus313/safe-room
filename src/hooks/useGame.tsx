import { useInfiniteQuery } from "@tanstack/react-query";


import ms from "ms";

import useGameQueryStore from "../storage/gameQueryStore";
import APIClient, { FetchResponse } from "../connections/gameAPIClient";
import { Game } from "../entities/entities";




const useGame = () =>{
  const gameQuery = useGameQueryStore(s => s.gameQuery);
  const ApiClient = new APIClient<Game>('/games');
  return useInfiniteQuery<FetchResponse<Game>,Error>({
    queryKey: ['games',gameQuery],
    initialPageParam: 1,
    // queryFn : ({pageParam = 1}) => gameAPIClient
    // .get<FetchedData<Game>>('/games',{params:{ genres: gameQuery.genre_id,
    //   platforms : gameQuery.platform_id, 
    //   ordering: gameQuery.order, 
    //   search: gameQuery.search,
    //   page : pageParam}})
    // .then(res => res.data),
    queryFn : ({ pageParam = 1 }) => ApiClient.getAll({params:{ genres: gameQuery.genre_id,
        platforms : gameQuery.platform_id, 
        ordering: gameQuery.order, 
        search: gameQuery.search,
        page : pageParam}}),
    staleTime : ms("1h"),
    getNextPageParam : (lastPage,allPages) => {
      return lastPage.next? allPages.length + 1 : undefined;
    }
  })
}    
export default useGame