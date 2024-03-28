import useGenre from "./useGenre";


function useFindGenre(genreID : number | null){
    let {data : dataList} = useGenre();
    let currentGenre = dataList.results.find(genre => genre.id === genreID) || null ;
    return currentGenre;
}
export default useFindGenre