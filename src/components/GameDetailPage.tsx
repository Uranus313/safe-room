import { AspectRatio, Box, GridItem, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGameBySlug from "../hooks/useGameBySlug";
import { useParams } from "react-router-dom";
import ExpandableText from "./ExpandableText";
import CriticScore from "./criticScore";
import DefinitionItem from "./DefinitionItem";
import GameAttributes from "./GameAttributes";

import GameTrailer from "./GameTrailer";
import GameScreenshots from "./GameScreenshots";

// import useGameTrailersApi from "../hooks/useGameTrailersApi";

function GameDetailPage(){
    const {slug} = useParams();
    const {data : game,isLoading,error}= useGameBySlug(slug!);

    if (isLoading) { return <Spinner/>}
    if (error || !game) {throw (error)}
    return (
        <>
        <SimpleGrid columns={{base : 1, md : 2}} spacing={5}>
            <GridItem>
                <Heading>{game.name}</Heading>
                <ExpandableText limit={300}>{game.description_raw}</ExpandableText>
                <GameAttributes game={game}/>
            </GridItem>
            <GridItem>
                <GameTrailer id={game.id} />
                <GameScreenshots slug= {slug!} />
            </GridItem>
        </SimpleGrid>
        
        
        </>
    );
} 
export default GameDetailPage;