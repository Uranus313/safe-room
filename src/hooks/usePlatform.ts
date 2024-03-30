

import { useQuery } from "@tanstack/react-query";

import ms from "ms";
import { platforms } from "../data/platforms";
import APIClient, { FetchResponse } from "../connections/gameAPIClient";
export interface Platform{
    id: number;
    name : string;
    slug : string;
  }
const usePlatform = () => {
  const ApiClient = new APIClient<Platform>('/platforms');
    // const fetchPlatform = () => gameAPIClient
    // .get<FetchedData<Platform>>('/platforms')
    // .then(res => res.data);
    return useQuery<FetchResponse<Platform>,Error>({
      queryKey: ['platforms'],
      queryFn : ApiClient.getAll,
      staleTime : ms("1h"),
      initialData: { count : platforms.length,next: null, results : platforms }
    })
  }  
export default usePlatform