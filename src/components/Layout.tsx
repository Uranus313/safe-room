import { Outlet } from "react-router-dom";
import NavBar from "./navbar";
import { Box } from "@chakra-ui/react";

function Layout(){
    return(
        <>
        <NavBar />
        <Box padding={3}>
            <Outlet />
        </Box>
        
        </>
    )
}
export default Layout;