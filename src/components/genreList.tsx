import { HStack, Heading, Image,  Text } from "@chakra-ui/react";
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
  let Skeletons = [1,2,3,4,5,6,7,8,9]
  return(
    <>
      {error && <Text>{error}</Text>}

      {isLoading && Skeletons.map(Skeleton => <Text key={Skeleton}>{Skeleton}</Text>)}
      <ul>
        <Heading marginBottom={3}>Genres</Heading>
        {dataList.map(genre => 
          <li key={genre.id}>
            <HStack paddingY={1}>
              <Image src= {getCroppedImage(genre.image_background)} boxSize={30} borderRadius={10}></Image>
              <Text>{genre.name}</Text>
            </HStack>
            
          </li>
        )}
     
      </ul>
        

    </>
  )
}
export default GenreList