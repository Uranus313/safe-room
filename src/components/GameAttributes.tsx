import { SimpleGrid,Text } from "@chakra-ui/react";
import { Game } from "../entities/entities";
import DefinitionItem from "./DefinitionItem";
import CriticScore from "./criticScore";

interface Props{
    game : Game;
}
function GameAttributes({game} : Props){
    return (
        <SimpleGrid columns={2} as={"dl"}>
        <DefinitionItem header={"Platforms"}>{game.parent_platforms?.map(platform => <Text key={platform.platform.id}>{platform.platform.name}</Text>)}</DefinitionItem>
        <DefinitionItem header={"Genres"}>{game.genres?.map(genre => <Text key={genre.id}>{genre.name}</Text>)}</DefinitionItem>
        <DefinitionItem header={"Metacritic"}><CriticScore rating={game.metacritic}/></DefinitionItem>
        <DefinitionItem header={"Publishers"}>{game.publishers?.map(publisher => <Text key={publisher.id}>{publisher.name}</Text>)}</DefinitionItem>
        </SimpleGrid>
    )
}
export default GameAttributes;