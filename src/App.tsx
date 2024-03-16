import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/navbar';
import GameList, { Platform } from './components/gameList';
import GenreList, { Genre } from './components/genreList';
import { useState } from 'react';
import PlatformMenu from './components/platformMenu';

export interface GameQuery{
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  let [gameQuery,setGameQuery] = useState<GameQuery>({} as GameQuery)
  return (
    <>
      <Grid templateAreas={{ base: ` "nav" "main" `, lg: ` "nav nav" "aside main" ` }}
      templateColumns={{base : "1fr", lg : "250px 1fr" }}>
        <GridItem area= "nav"  >
          <NavBar />
        </GridItem>
        <GridItem area={"main"}  height={"100px"} >
          <PlatformMenu selectedPlatform={gameQuery.platform} setSelectedPlatform={(platform) => setGameQuery({...gameQuery,platform})}/>
          <GameList gameQuery={gameQuery} />
        </GridItem>
        <Show above='lg'>
          <GridItem area={"aside"} height={"100px"} paddingLeft={5}>
            <GenreList setSelectedGenre={(genre) => setGameQuery({...gameQuery,genre})} />
          </GridItem>
        </Show>
      </Grid>
    </>
  );
}

export default App;
