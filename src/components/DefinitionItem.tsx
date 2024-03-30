import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props{
    header : string;
    children : ReactNode | ReactNode[];
}
function DefinitionItem({header,children} : Props){
    return(
        <Box marginY={8}>
            <Heading as={"dt"} fontSize={"md"} color={"grey"}>{header}</Heading>
            <dd>
                {children}
            </dd>
        </Box>
    )
}
export default DefinitionItem;