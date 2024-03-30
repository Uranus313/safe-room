import { HStack, Heading, Image,  Link,  List,  Spinner,  Text } from "@chakra-ui/react";

import getCroppedImage from "../functions/getCroppedImage";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../storage/gameQueryStore";
// import GameCardSkeleton from "./gameCardSkeleton";


function GenreList(){
  let {data : dataList,error,isLoading} = useGenre()
  const [selectedGenreID,setSelectedGenre] = useGameQueryStore(s => [s.gameQuery.genre_id, s.setGenreId]); 
  return(
    <>
      {error && <Text>{error.message}</Text>}
      <Heading marginBottom={3}>Genres</Heading>
      {isLoading && <Spinner></Spinner>}
      <List>
        
        {dataList?.results.map(genre => 
          <li key={genre.id}>
            <HStack paddingY={1} onClick={genre.id === selectedGenreID ? () => setSelectedGenre(null) : () => setSelectedGenre(genre.id)}>
              <Image src= {getCroppedImage(genre.image_background)} boxSize={30} borderRadius={10}></Image>
              <Link textColor={ genre.id === selectedGenreID ? "blue": ""} textDecor={genre.id === selectedGenreID ? "underline": ""}>{genre.name}</Link>
            </HStack>
            
          </li>
        )}
     
      </List>
        

    </>
  )
}
export default GenreList