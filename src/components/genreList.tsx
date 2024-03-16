import { HStack, Heading, Image,  Link,  List,  Spinner,  Text } from "@chakra-ui/react";
import useDataList from "../hooks/useDataList";
import getCroppedImage from "../functions/getCroppedImage";
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
function GenreList(props : Props){
  let {dataList,error,isLoading} = useDataList<Genre>("/genres")
  return(
    <>
      {error && <Text>{error}</Text>}
      <Heading marginBottom={3}>Genres</Heading>
      {isLoading && <Spinner></Spinner>}
      <List>
        
        {dataList.map(genre => 
          <li key={genre.id}>
            <HStack paddingY={1} onClick={genre === props.selectedGenre ? () => props.setSelectedGenre(null) : () => props.setSelectedGenre(genre)}>
              <Image src= {getCroppedImage(genre.image_background)} boxSize={30} borderRadius={10}></Image>
              <Link textColor={ genre === props.selectedGenre ? "blue": ""} textDecor={genre === props.selectedGenre ? "underline": ""}>{genre.name}</Link>
            </HStack>
            
          </li>
        )}
     
      </List>
        

    </>
  )
}
export default GenreList