import { useEffect, useState } from "react";
import gameAPIClient from "../connections/gameAPIClient";
import { AxiosRequestConfig, CanceledError } from "axios";

  interface FetchedData<T>{
    count : string;
    results : T[];
  }
function useDataList<T>(endpoint : string, requestConfig? : AxiosRequestConfig, deps? : any[]){
  let controller = new AbortController()
  let [dataList,setDataList] = useState<T[]>([]);
  let [error,setError] = useState();
  let [isLoading,setLoading] = useState(true)
  useEffect(() => {
    gameAPIClient.get<FetchedData<T>>(endpoint,{ signal: controller.signal, ...requestConfig }).
    then( res => {setDataList(res.data.results); setLoading(false)}).
    catch(err => {if (err instanceof CanceledError) return;
      setError(err.message); 
      setLoading(false);});
    // return () => controller.abort();
  },deps? [...deps] : [])
  return {dataList,error,isLoading}
}
export default useDataList