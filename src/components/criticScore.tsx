import { Badge } from "@chakra-ui/react";

interface Props{
    rating: number;
}
function CriticScore(props : Props){
    let color = props.rating > 80 ? "green" : props.rating > 65 ? "yellow" : "red";
    return <Badge colorScheme={color} paddingX={2} borderRadius={10}>{props.rating}</Badge>
}
export default CriticScore