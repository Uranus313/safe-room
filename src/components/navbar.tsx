import { HStack, Image,  Switch, Text, useColorMode } from "@chakra-ui/react";
import logoImage from "../assets/logo.webp";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import useGameQueryStore from "../storage/gameQueryStore";


function NavBar(){
    let {toggleColorMode,colorMode}= useColorMode()
    const setSearchText = useGameQueryStore(s => s.setSearchText);
    return(
    <HStack justifyContent={"space-between"}  paddingX={2}>
        <Link to={"/"}><Image src={logoImage} alt="site logo" boxSize={20} objectFit={"cover"} onClick={() => setSearchText("")}></Image></Link>
        
        <SearchInput />
        <HStack>
          <Switch colorScheme="green" isChecked={(colorMode === "dark")} onChange={toggleColorMode}></Switch>
          <Text>Dark mode</Text>  
        </HStack>
    </HStack>
    )
}
export default NavBar; 