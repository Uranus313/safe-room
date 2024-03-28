// import useDataList from "./useDataList";
import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import gameAPIClient, { FetchedData } from "../connections/gameAPIClient";
import ms from "ms";
import { genres } from "../data/genres";
export interface Genre{
    id: number;
    name: string;
    image_background: string;
  }

const useGenre = () => {
  const fetchGenres = () => gameAPIClient
  .get<FetchedData<Genre>>('/genres')
  .then(res => res.data);
  return useQuery<FetchedData<Genre>,Error>({
    queryKey: ['genres'],
    queryFn : fetchGenres,
    staleTime : ms("24h"),
    initialData: { count : genres.length,next: null, results : genres }
  })
    // return useDataList<Genre>("/genres")
}  
export default useGenre


