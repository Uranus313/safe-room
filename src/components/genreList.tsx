import { HStack, Heading, Image,  List,  Spinner,  Text } from "@chakra-ui/react";
import useDataList from "../hooks/useDataList";
import getCroppedImage from "../functions/getCroppedImage";
// import GameCardSkeleton from "./gameCardSkeleton";
interface Genre{
    id: number;
    name: string;
    image_background: string;
  }

function GenreList(){
  let {dataList,error,isLoading} = useDataList<Genre>("/genres")
  return(
    <>
      {error && <Text>{error}</Text>}
      <Heading marginBottom={3}>Genres</Heading>
      {isLoading && <Spinner></Spinner>}
      <List>
        
        {dataList.map(genre => 
          <li key={genre.id}>
            <HStack paddingY={1}>
              <Image src= {getCroppedImage(genre.image_background)} boxSize={30} borderRadius={10}></Image>
              <Text>{genre.name}</Text>
            </HStack>
            
          </li>
        )}
     
      </List>
        

    </>
  )
}
export default GenreList