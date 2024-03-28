import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/navbar';
import GameList from './components/gameList';
import GenreList from './components/genreList';
import { useState } from 'react';
import PlatformMenu from './components/platformMenu';
import SortMenu from './components/sortMenu';
import GenreMenu from './components/genreMenu';
import GameListHeading from './components/gameListHeading';

export interface GameQuery{
  genre_id: number | null;
  platform_id: number | null;
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
          <GameListHeading genre_id={gameQuery.genre_id} platform_id={gameQuery.platform_id} />
          <HStack marginBottom={3}>
            <PlatformMenu selectedPlatformID={gameQuery.platform_id} setSelectedPlatform={(platform_id) => setGameQuery({...gameQuery,platform_id})}/>
            <SortMenu selectedOrdering={gameQuery.order} setSelectedOrdering={(order) => setGameQuery({...gameQuery,order})}/>
            
          </HStack>
          <Show below='lg'>
            <GenreMenu selectedGenreID={gameQuery.genre_id} setSelectedGenre={(genre_id) => setGameQuery({...gameQuery,genre_id})} />
          </Show>
          <GameList gameQuery={gameQuery} />
        </GridItem>
        <Show above='lg' >
          <GridItem area={"aside"} height={"100px"} paddingLeft={5}>
            <GenreList selectedGenreID={gameQuery.genre_id} setSelectedGenre={(genre_id) => setGameQuery({...gameQuery,genre_id})} />
          </GridItem>
        </Show>
      </Grid>
    </>
  );
}

export default App;
