import { Button, ButtonGroup, Grid, GridItem, Show, SimpleGrid } from '@chakra-ui/react'
import NavBar from './components/navbar';
function App() {
  return (
    <>
      <Grid templateAreas={{ base: ` "nav" "main" `, lg: ` "nav nav" "aside main" ` }}
      templateColumns={{base : "1fr", lg : "250px 1fr" }}>
        <GridItem area= "nav"  >
          <NavBar />
        </GridItem>
        <GridItem area={"main"}  height={"100px"} ></GridItem>
        <Show above='lg'>
          <GridItem area={"aside"} height={"100px"} ></GridItem>
        </Show>
      </Grid>
      {/* <SimpleGrid columns={}></SimpleGrid> */}
      <Button colorScheme='blue'>Button</Button>
    </>
  );
}

export default App;
