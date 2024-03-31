import { AspectRatio, Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGameBySlug from "../hooks/useGameBySlug";
import { useParams } from "react-router-dom";
import ExpandableText from "./ExpandableText";
import CriticScore from "./criticScore";
import DefinitionItem from "./DefinitionItem";
import GameAttributes from "./GameAttributes";
import useGameTrailers from "../hooks/useGameTrailers";
import GameTrailer from "./GameTrailer";
import GameScreenshots from "./GameScreenshots";

function GameDetailPage(){
    const {slug} = useParams();
    const {data : game,isLoading,error}= useGameBySlug(slug!);
    const {data : trailers} = useGameTrailers(slug!); 
    // console.log(trailers?.results)
    if (isLoading) { return <Spinner/>}
    if (error || !game) {throw (error)}
    return (
        <>
        
        <Heading>{game.name}</Heading>
        <ExpandableText limit={300}>{game.description_raw}</ExpandableText>
        <GameAttributes game={game}/>
        <GameTrailer slug={slug!} />
        <GameScreenshots slug= {slug!} />
        </>
    );
} 
export default GameDetailPage;