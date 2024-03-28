

import { useQuery } from "@tanstack/react-query";
import gameAPIClient, { FetchedData } from "../connections/gameAPIClient";
import ms from "ms";
import { platforms } from "../data/platforms";
export interface Platform{
    id: number;
    name : string;
    slug : string;
  }
const usePlatform = () => {
    const fetchPlatform = () => gameAPIClient
    .get<FetchedData<Platform>>('/platforms')
    .then(res => res.data);
    return useQuery<FetchedData<Platform>,Error>({
      queryKey: ['platforms'],
      queryFn : fetchPlatform,
      staleTime : ms("1h"),
      initialData: { count : platforms.length,next: null, results : platforms }
    })
  }  
export default usePlatform