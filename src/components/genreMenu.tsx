import { Button, HStack,Image,  Menu,  MenuButton,  MenuItem,  MenuList,  Text } from "@chakra-ui/react";
import useDataList from "../hooks/useDataList";
import getCroppedImage from "../functions/getCroppedImage";
import { BsChevronDown } from "react-icons/bs";
// import GameCardSkeleton from "./gameCardSkeleton";
export interface Genre{
    id: number;
    name: string;
    image_background: string;
  }
interface Props{
  setSelectedGenre : (genre : Genre | null) => void;
  selectedGenre : Genre | null;
}
function GenreMenu(props : Props){
  let {dataList} = useDataList<Genre>("/genres")
  return(
    <>
      {/* {error && <Text>{error}</Text>}
      <Heading marginBottom={3}>Genres</Heading>
      {isLoading && <Spinner></Spinner>} */}
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />} marginBottom={3}>
          {props.selectedGenre ? <Text>{props.selectedGenre.name}</Text> : <Text>Genre</Text>}
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => props.setSelectedGenre(null)}>All genres</MenuItem>
          {dataList.map(genre => 
            <MenuItem key={genre.id} onClick={ () => props.setSelectedGenre(genre)}>
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