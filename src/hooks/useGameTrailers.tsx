
import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../connections/gameAPIClient";
import ms from "ms";
import { Trailer } from "../entities/entities";


function useGameTrailers(id : number){
    const ApiClient = new APIClient<Trailer>(`/games/${id}/movies`);
  // const fetchGenres = () => gameAPIClient
  // .get<FetchedData<Genre>>('/genres')
  // .then(res => res.data);
  return useQuery<FetchResponse<Trailer>,Error>({
    queryKey: ['trailers',id],
    queryFn :  ApiClient.getAll,
    staleTime : ms("24h"),
    // initialData: { count : genres.length,next: null, results : genres }
  })
}
export default useGameTrailers;