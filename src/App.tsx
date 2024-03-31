import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react'

import GameList from './components/gameList';
import GenreList from './components/genreList';

import PlatformMenu from './components/platformMenu';
import SortMenu from './components/sortMenu';
import GenreMenu from './components/genreMenu';
import GameListHeading from './components/gameListHeading';




function App() {
  
  // let [gameQuery,setGameQuery] = useState<GameQuery>({} as GameQuery)
  return (
    <>
      <Grid templateAreas={{ base: ` "main" `, lg: `  "aside main" ` }}
      templateColumns={{base : "1fr", lg : "250px 1fr" }}>
        <GridItem area={"main"}  height={"100px"} paddingLeft={2} 
          >
          <GameListHeading  />
          <HStack marginBottom={3} paddingRight={2}
          paddingLeft={2}>
            <PlatformMenu />
            <SortMenu />
            
          </HStack>
          <Show below='lg'>
            <Box paddingLeft={2}>
            <GenreMenu />
            </Box>
            
          </Show>
          <GameList  />
        </GridItem>
        <Show above='lg' >
          <GridItem area={"aside"} height={"100px"} paddingLeft={5}>
            <GenreList />
          </GridItem>
        </Show>
      </Grid>
    </>
  );
}

export default App;
