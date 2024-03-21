

import { useQuery } from "@tanstack/react-query";
import gameAPIClient, { FetchedData } from "../connections/gameAPIClient";

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
      staleTime : 200000,
      initialData: { count : platforms.length, results : platforms }
    })
  }  
export default usePlatform