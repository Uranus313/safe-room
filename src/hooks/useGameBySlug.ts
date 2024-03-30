import { useQuery } from "@tanstack/react-query";

import { Game } from "./useGame";
import ms from "ms";
import APIClient, { FetchResponse } from "../connections/gameAPIClient";

function useGameBySlug(slug : string){
    const ApiClient = new APIClient<Game>('/games');
  return useQuery<Game,Error>({
    queryKey: ['game',slug],
    queryFn : () => ApiClient.get(slug),
    staleTime : ms("30m")
  })
}
export default useGameBySlug;