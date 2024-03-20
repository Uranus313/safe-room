import useDataList from "./useDataList"
import { Platform } from "./useGame"

const usePlatform = () => {
    return useDataList<Platform>("/platforms")
}
export default usePlatform