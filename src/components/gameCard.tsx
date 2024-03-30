import {Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import getCroppedImage from "../functions/getCroppedImage";
import CriticScore from "./criticScore";
import { Platform } from "../hooks/usePlatform";
import PLatformList from "./platformList";
import { Link } from "react-router-dom";

interface Props{
    gameName : string;
    imgUrl : string;
    metacritic : number;
    slug : string;
    platforms : Platform[];
}
function GameCard(props : Props){
    return(
        <Card _hover={{
          transform: 'scale(1.05)', // Increase the scale by 5% on hover
          transition: 'transform 0.3s ease', // Add a smooth transition
        }}>
          <Image  src={getCroppedImage(props.imgUrl)} borderRadius={6}></Image>
          <CardBody>
            <HStack justifyContent={"space-between"}>
              <PLatformList platforms={props.platforms}/>
              <CriticScore rating={props.metacritic} />
            </HStack>
            
            <Heading size={"md"} marginTop={3}>
              <Link to={`/Games/${props.slug}`}>
              {props.gameName}
              </Link>
            </Heading>
          </CardBody>
        </Card>
    )
}
export default GameCard