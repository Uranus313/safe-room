import { Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";


function ErrorPage(){
    const error = useRouteError();
    return(
        <>
        <Heading>Oh NO!!!</Heading>
        <Text>
            {isRouteErrorResponse(error) ? "this page doesn't exist" : "seems like an error occured"}
        </Text>
        </>
    );
}
export default ErrorPage;