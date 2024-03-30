// import useDataList from "./useDataList";
import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

import ms from "ms";
import { genres } from "../data/genres";
import APIClient, { FetchResponse } from "../connections/gameAPIClient";
export interface Genre{
    id: number;
    name: string;
    image_background: string;
  }

const useGenre = () => {
  const ApiClient = new APIClient<Genre>('/genres');
  // const fetchGenres = () => gameAPIClient
  // .get<FetchedData<Genre>>('/genres')
  // .then(res => res.data);
  return useQuery<FetchResponse<Genre>,Error>({
    queryKey: ['genres'],
    queryFn :  ApiClient.getAll,
    staleTime : ms("24h"),
    initialData: { count : genres.length,next: null, results : genres }
  })
    // return useDataList<Genre>("/genres")
}  
export default useGenre


