import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./gameCard";
import GameCardSkeleton from "./gameCardSkeleton";
import { GameQuery } from "../App";
import useGame from "../hooks/useGame";
import React from "react";

interface Props{
  gameQuery : GameQuery;
}
function gameList(props : Props){
  let pageSize = 20;
  let {data : dataList,error,isLoading,isFetchingNextPage,fetchNextPage,hasNextPage} = useGame(props.gameQuery,{pageSize})
  let Skeletons = [1,2,3,4,5,6,7,8,9]
  return(
    <>
      {error && <Text>{error.message}</Text>}
      
      <SimpleGrid columns={{sm : 1, md: 2, lg: 3, xl: 4}} spacing={6} paddingRight={2}>
        {isLoading && Skeletons.map(Skeleton => <GameCardSkeleton key={Skeleton}/>)}
        {dataList?.pages.map( (page,index) => (
          <React.Fragment key={index}>
           {page.results.map(game => <GameCard key={game.id} gameName={game.name} metacritic={game.metacritic} imgUrl={game.background_image} platforms={game.parent_platforms?.map(p => p.platform)}/> )}
          </React.Fragment>
        ))}
        
      </SimpleGrid>
      {hasNextPage && <Button marginY={5} onClick={() => fetchNextPage()}>{isFetchingNextPage ? "Loading..." : "Load more"}</Button>}
    </>
  )
}
export default gameList