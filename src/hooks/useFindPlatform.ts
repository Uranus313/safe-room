import usePlatform from "./usePlatform";

function useFindPlatform(platformId : number | null){
    let {data : dataList} = usePlatform();
    let currentPlatform = dataList.results.find(platform => platform.id === platformId) || null ;
    return currentPlatform;
}
export default useFindPlatform