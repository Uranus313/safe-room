
import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../connections/gameAPIClient";
import ms from "ms";
import { Screenshot } from "../entities/entities";



function useGameScreenshots(slug : string){
    const ApiClient = new APIClient<Screenshot>('/games/'+slug+"/screenshots");
  return useQuery<FetchResponse<Screenshot>,Error>({
    queryKey: ['screenshots',slug],
    queryFn :  ApiClient.getAll,
    staleTime : ms("24h")
  })
}
export default useGameScreenshots;