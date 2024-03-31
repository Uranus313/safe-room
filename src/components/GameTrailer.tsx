import { AspectRatio, Spinner } from "@chakra-ui/react";
import useGameTrailers from "../hooks/useGameTrailers";

interface Props{
    id : number;
}
function GameTrailer({id} : Props){
    const {data : trailers,isLoading,error} = useGameTrailers(id); 
    console.log(id)
    console.log(trailers)
    if (isLoading){
        return <Spinner /> 
    }
    if (error){ throw (error)}
    const firstTrailer = trailers?.results[0];
    return firstTrailer ?  <video src={firstTrailer?.data[480]} poster={firstTrailer?.preview} controls></video> : null
}
export default GameTrailer;