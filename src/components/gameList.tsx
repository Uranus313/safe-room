import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./gameCard";
import useDataList from "../hooks/useDataList";
interface Game{
    id: number;
    name: string;
    background_image: string;
  }

function gameList(){
  let {dataList,error} = useDataList<Game>("/games")
  return(
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm : 1, md: 2, lg: 3, xl: 4}} spacing={6} paddingRight={2}>
        {dataList.map(game => <GameCard key={game.id} gameName={game.name} imgUrl={game.background_image}/> )}
      </SimpleGrid>
      <ul>
        
      </ul>
    </>
  )
}
export default gameList