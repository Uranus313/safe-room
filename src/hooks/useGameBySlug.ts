import { useQuery } from "@tanstack/react-query";


import ms from "ms";
import APIClient from "../connections/gameAPIClient";
import { Game } from "../entities/entities";

function useGameBySlug(slug : string){
    const ApiClient = new APIClient<Game>('/games');
  return useQuery<Game,Error>({
    queryKey: ['game',slug],
    queryFn : () => ApiClient.get(slug),
    staleTime : ms("30m")
  })
}
export default useGameBySlug;