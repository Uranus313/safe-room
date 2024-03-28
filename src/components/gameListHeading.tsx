import { Heading } from "@chakra-ui/react";

import useFindPlatform from "../hooks/useFindPlatform";
import useFindGenre from "../hooks/useFindGenre";

interface Props{
    genre_id : number | null;
    platform_id : number | null;
}
function GameListHeading(props : Props){

    let currentGenre = useFindGenre(props.genre_id);
    let currentPlatform = useFindPlatform(props.platform_id);
    return <Heading marginBottom={3}>{currentGenre && currentGenre.name} {currentPlatform && currentPlatform.name} Games</Heading>
}
export default GameListHeading