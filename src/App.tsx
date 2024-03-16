import { Grid, GridItem, HStack, Heading, Show } from '@chakra-ui/react'
import NavBar from './components/navbar';
import GameList, { Platform } from './components/gameList';
import GenreList, { Genre } from './components/genreList';
import { useState } from 'react';
import PlatformMenu from './components/platformMenu';
import SortMenu from './components/sortMenu';

export interface GameQuery{
  genre: Genre | null;
  platform: Platform | null;
  order: string;
  search : string;
}

function App() {
  let [gameQuery,setGameQuery] = useState<GameQuery>({} as GameQuery)
  return (
    <>
      <Grid templateAreas={{ base: ` "nav" "main" `, lg: ` "nav nav" "aside main" ` }}
      templateColumns={{base : "1fr", lg : "250px 1fr" }}>
        <GridItem area= "nav"  >
          <NavBar setSelectedSearch={(search) => {setGameQuery({...gameQuery,search});}}/>
        </GridItem>
        <GridItem area={"main"}  height={"100px"} paddingLeft={2}>
          <Heading marginBottom={3}>{gameQuery.genre && gameQuery.genre.name} Games</Heading>
          <HStack marginBottom={3}>
            <PlatformMenu selectedPlatform={gameQuery.platform} setSelectedPlatform={(platform) => setGameQuery({...gameQuery,platform})}/>
            <SortMenu selectedOrdering={gameQuery.order} setSelectedOrdering={(order) => setGameQuery({...gameQuery,order})}/>
          </HStack>
          <GameList gameQuery={gameQuery} />
        </GridItem>
        <Show above='lg'>
          <GridItem area={"aside"} height={"100px"} paddingLeft={5}>
            <GenreList selectedGenre={gameQuery.genre} setSelectedGenre={(genre) => setGameQuery({...gameQuery,genre})} />
          </GridItem>
        </Show>
      </Grid>
    </>
  );
}

export default App;
