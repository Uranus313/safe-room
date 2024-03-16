import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./gameCard";
import useDataList from "../hooks/useDataList";
import GameCardSkeleton from "./gameCardSkeleton";
import { GameQuery } from "../App";
export interface Platform{
  id: number;
  name : string;
  slug : string;
}
interface Game{
    id: number;
    name: string;
    background_image: string;
    metacritic: number;
    parent_platforms : {platform : Platform}[]
  }
interface Props{
  gameQuery : GameQuery;
}
function gameList(props : Props){
  let {dataList,error,isLoading} = useDataList<Game>("/games",{params:{ genres: props.gameQuery.genre?.id,
  platforms : props.gameQuery.platform?.id, ordering: props.gameQuery.order}},[props.gameQuery])
  let Skeletons = [1,2,3,4,5,6,7,8,9]
  return(
    <>
      {error && <Text>{error}</Text>}
      
      <SimpleGrid columns={{sm : 1, md: 2, lg: 3, xl: 4}} spacing={6} paddingRight={2}>
        {isLoading && Skeletons.map(Skeleton => <GameCardSkeleton key={Skeleton}/>)}
        {dataList.map(game => <GameCard key={game.id} gameName={game.name} metacritic={game.metacritic} imgUrl={game.background_image} platforms={game.parent_platforms?.map(p => p.platform)}/> )}
      </SimpleGrid>
    </>
  )
}
export default gameList