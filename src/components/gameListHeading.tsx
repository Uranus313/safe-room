import { Heading } from "@chakra-ui/react";

import useFindPlatform from "../hooks/useFindPlatform";
import useFindGenre from "../hooks/useFindGenre";
import useGameQueryStore from "../storage/gameQueryStore";


function GameListHeading(){
    const [genre_id, platform_id]= useGameQueryStore( s => [s.gameQuery.genre_id , s.gameQuery.platform_id]);
    let currentGenre = useFindGenre(genre_id);
    let currentPlatform = useFindPlatform(platform_id);
    return <Heading marginBottom={3}>{currentGenre && currentGenre.name} {currentPlatform && currentPlatform.name} Games</Heading>
}
export default GameListHeading