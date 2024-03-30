import { Button, Text, chakra } from "@chakra-ui/react";
import { useState } from "react";

interface Props{
    children : string;
    limit : number;
}
function ExpandableText({children,limit} : Props){
    const [expanded,setExpanded] = useState(false)
    if(!children){
        return null;
    }
    if(children.length <= limit){
        return <Text>text</Text>
    }
    const finalText = expanded ? children : children.substring(0,limit) + "...";
    return(

        <Text>{finalText}
        <Button size={"xs"} fontWeight={"bold"} colorScheme="blue" marginLeft={1} onClick={() =>  setExpanded(!expanded)} >{expanded ? "Show Less" : "Show More"}</Button>
        </Text>

    )
}
export default ExpandableText;