import {  SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import GameCard from "./gameCard";
import GameCardSkeleton from "./gameCardSkeleton";

import useGame from "../hooks/useGame";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";



function gameList() {
  // let pageSize = 20;
  
  let {
    data: dataList,
    error,
    isLoading,
    // isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGame();
  let Skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const totalFetchedGames =
    dataList?.pages.reduce((total, page) => total + page.results.length, 0) ||
    0;
  return (
    <>
      {error && <Text>{error.message}</Text>}

      <InfiniteScroll
        dataLength={totalFetchedGames} //This is important field to render the next data
        next={() => fetchNextPage()}
        hasMore={hasNextPage}
        loader={<Spinner marginY={5}/>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={6}
          paddingRight={2}
        >
          {isLoading &&
            Skeletons.map((Skeleton) => <GameCardSkeleton key={Skeleton} />)}
          {dataList?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCard
                  key={game.id}
                  gameName={game.name}
                  metacritic={game.metacritic}
                  imgUrl={game.background_image}
                  platforms={game.parent_platforms?.map((p) => p.platform)}
                />
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
}
export default gameList;
