import { Heading, Spinner, Text } from "@chakra-ui/react";
import useGameBySlug from "../hooks/useGameBySlug";
import { useParams } from "react-router-dom";
import ExpandableText from "./ExpandableText";

function GameDetailPage(){
    const {slug} = useParams();
    const {data : game,isLoading,error}= useGameBySlug(slug!);
    if (isLoading) { return <Spinner/>}
    if (error || !game) {throw (error)}
    return (
        <>
        <Heading>{game.name}</Heading>
        <ExpandableText limit={300}>{game.description_raw}</ExpandableText>
        </>
    );
} 
export default GameDetailPage;