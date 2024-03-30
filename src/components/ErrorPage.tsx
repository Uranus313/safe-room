import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "./navbar";


function ErrorPage(){
    const error = useRouteError();
    return(
        <>
        <Navbar />
        <Box padding={6}>
        <Heading>Oh NO!!!</Heading>
        <Text>
            {isRouteErrorResponse(error) ? "this page doesn't exist" : "seems like an error occured"}
        </Text>
        </Box>
        </>
    );
}
export default ErrorPage;