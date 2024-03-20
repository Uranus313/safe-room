import useDataList from "./useDataList";

export interface Genre{
    id: number;
    name: string;
    image_background: string;
  }
const useGenre = () => {
    return useDataList<Genre>("/genres")
}  
export default useGenre