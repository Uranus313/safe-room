import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props{
    genre_id : number | null;
    platform_id : number | null;
}
function GameListHeading(props : Props){
    let {data : genreList} = useGenre()
    let {data : platformList} = usePlatform()
    let currentGenre = genreList.results.find(genre => genre.id === props.genre_id) || null ;
    let currentPlatform = platformList.results.find(platform => platform.id === props.platform_id) || null ;
    return <Heading marginBottom={3}>{currentGenre && currentGenre.name} {currentPlatform && currentPlatform.name} Games</Heading>
}
export default GameListHeading