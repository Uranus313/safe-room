import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import getCroppedImage from "../functions/getCroppedImage";

interface Props{
    gameName : string;
    imgUrl : string;
}
function GameCard(props : Props){
    return(
        <Card >
          <Image  src={getCroppedImage(props.imgUrl)} borderRadius={6}></Image>
          <CardBody>
            <Heading size={"lg"}>
              {props.gameName}
            </Heading>
          </CardBody>
        </Card>
    )
}
export default GameCard