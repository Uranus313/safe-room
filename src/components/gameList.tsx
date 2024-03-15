import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./gameCard";
import useDataList from "../hooks/useDataList";
import GameCardSkeleton from "./gameCardSkeleton";
interface Game{
    id: number;
    name: string;
    background_image: string;
  }

function gameList(){
  let {dataList,error,isLoading} = useDataList<Game>("/games")
  let Skeletons = [1,2,3,4,5,6,7,8,9]
  return(
    <>
      {error && <Text>{error}</Text>}
      
      <SimpleGrid columns={{sm : 1, md: 2, lg: 3, xl: 4}} spacing={6} paddingRight={2}>
        {isLoading && Skeletons.map(Skeleton => <GameCardSkeleton key={Skeleton}/>)}
        {dataList.map(game => <GameCard key={game.id} gameName={game.name} imgUrl={game.background_image}/> )}
      </SimpleGrid>
    </>
  )
}
export default gameList