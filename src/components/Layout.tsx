import { Outlet } from "react-router-dom";
import NavBar from "./navbar";

function Layout(){
    return(
        <>
        <NavBar />
        <Outlet />
        </>
    )
}
export default Layout;