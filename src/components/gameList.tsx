import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import gameAPIClient from "../connections/gameAPIClient";

interface Game{
  id: number;
  name: string;
}
interface FetchedGameData{
  count : string;
  results : Game[];

}
function gameList(){
  let [gameList,setGameList] = useState<Game[]>([])
  let [error,setError] = useState()
  useEffect(() => {
    gameAPIClient.get<FetchedGameData>("/games").
    then( res => setGameList(res.data.results)).
    catch(err => setError(err.message));
  },[])
  return(
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {gameList.map(game => <li key={game.id}>{game.name}</li> )}
      </ul>
    </>
  )
}
export default gameList