import { HStack, Heading, Image,  Link,  List,  Spinner,  Text } from "@chakra-ui/react";

import getCroppedImage from "../functions/getCroppedImage";
import useGenre from "../hooks/useGenre";
// import GameCardSkeleton from "./gameCardSkeleton";

interface Props{
  setSelectedGenre : (genre : number | null) => void;
  selectedGenreID : number | null;
}
function GenreList(props : Props){
  let {data : dataList,error,isLoading} = useGenre()
  return(
    <>
      {error && <Text>{error.message}</Text>}
      <Heading marginBottom={3}>Genres</Heading>
      {isLoading && <Spinner></Spinner>}
      <List>
        
        {dataList?.results.map(genre => 
          <li key={genre.id}>
            <HStack paddingY={1} onClick={genre.id === props.selectedGenreID ? () => props.setSelectedGenre(null) : () => props.setSelectedGenre(genre.id)}>
              <Image src= {getCroppedImage(genre.image_background)} boxSize={30} borderRadius={10}></Image>
              <Link textColor={ genre.id === props.selectedGenreID ? "blue": ""} textDecor={genre.id === props.selectedGenreID ? "underline": ""}>{genre.name}</Link>
            </HStack>
            
          </li>
        )}
     
      </List>
        

    </>
  )
}
export default GenreList