import {Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import getCroppedImage from "../functions/getCroppedImage";
import CriticScore from "./criticScore";
import { Platform } from "../hooks/useGame";
import PLatformList from "./platformList";

interface Props{
    gameName : string;
    imgUrl : string;
    metacritic : number;
    platforms : Platform[];
}
function GameCard(props : Props){
    return(
        <Card >
          <Image  src={getCroppedImage(props.imgUrl)} borderRadius={6}></Image>
          <CardBody>
            <HStack justifyContent={"space-between"}>
              <PLatformList platforms={props.platforms}/>
              <CriticScore rating={props.metacritic} />
            </HStack>
            
            <Heading size={"md"}>
              {props.gameName}
            </Heading>
          </CardBody>
        </Card>
    )
}
export default GameCard