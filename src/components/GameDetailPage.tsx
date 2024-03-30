import { Heading, Spinner, Text } from "@chakra-ui/react";
import useGameBySlug from "../hooks/useGameBySlug";
import { useParams } from "react-router-dom";

function GameDetailPage(){
    const {slug} = useParams();
    const {data : game,isLoading,error}= useGameBySlug(slug!);
    if (isLoading) { return <Spinner/>}
    if (error || !game) {throw (error)}
    return (
        <>
        <Heading>{game.name}</Heading>
        <Text>{game.description_raw}</Text>
        </>
    );
} 
export default GameDetailPage;