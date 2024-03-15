import { useEffect, useState } from "react";
import gameAPIClient from "../connections/gameAPIClient";

  interface FetchedData<T>{
    count : string;
    results : T[];
  }
function useDataList<T>(endpoint : string){
  let controller = new AbortController()
  let [dataList,setDataList] = useState<T[]>([]);
  let [error,setError] = useState();
  let [isLoading,setLoading] = useState(true)
  useEffect(() => {
    gameAPIClient.get<FetchedData<T>>(endpoint).
    then( res => {setDataList(res.data.results); setLoading(false)}).
    catch(err => setError(err.message));
    return () => controller.abort();
  },[])
  return {dataList,error,isLoading}
}
export default useDataList