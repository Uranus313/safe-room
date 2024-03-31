import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useGameScreenshots from "../hooks/useGameScreenshots";

interface Props{
    slug: string;
}
function GameScreenshots({slug} : Props){
    const {data : screenshots,isLoading,error} = useGameScreenshots(slug);
    if(isLoading){
        return <Spinner />
    }
    if(error){ throw (error)}
    return (
        <SimpleGrid columns={{base: 1 , md:2}} spacing={4} marginY={4}>
            {screenshots?.results.map(screenshot => <Image key={screenshot.id}  src={screenshot.image} />)}
        </SimpleGrid>
    )
}
export default GameScreenshots;