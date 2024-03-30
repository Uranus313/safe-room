import { Button, HStack,Image,  Menu,  MenuButton,  MenuItem,  MenuList,  Text } from "@chakra-ui/react";

import getCroppedImage from "../functions/getCroppedImage";
import { BsChevronDown } from "react-icons/bs";
import useGenre from "../hooks/useGenre";
import useFindGenre from "../hooks/useFindGenre";
import useGameQueryStore from "../storage/gameQueryStore";
// import GameCardSkeleton from "./gameCardSkeleton";


function GenreMenu(){
  let {data : dataList} = useGenre();
  const [selectedGenreID,setSelectedGenre] = useGameQueryStore(s => [s.gameQuery.genre_id, s.setGenreId]);  
  let currentGenre = useFindGenre(selectedGenreID);
  return(
    <>
      {/* {error && <Text>{error}</Text>}
      <Heading marginBottom={3}>Genres</Heading>
      {isLoading && <Spinner></Spinner>} */}
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />} marginBottom={3}>
          {currentGenre ? <Text>{currentGenre.name}</Text> : <Text>Genre</Text>}
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => setSelectedGenre(null)}>All genres</MenuItem>
          {dataList.results.map(genre => 
            <MenuItem key={genre.id} onClick={ () => setSelectedGenre(genre.id)}>
              <HStack paddingY={1} >
                <Image src= {getCroppedImage(genre.image_background)} boxSize={30} borderRadius={10}></Image>
                <Text>{genre.name}</Text>
              </HStack>
              
            </MenuItem>
        )}
        </MenuList>
      </Menu>  
        

    </>
  )
}
export default GenreMenu