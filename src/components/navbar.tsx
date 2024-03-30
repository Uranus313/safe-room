import { HStack, Image,  Switch, Text, useColorMode } from "@chakra-ui/react";
import logoImage from "../assets/logo.webp";
import SearchInput from "./SearchInput";


function NavBar(){
    let {toggleColorMode,colorMode}= useColorMode()
    
    return(
    <HStack justifyContent={"space-between"}  paddingX={2}>
        <Image src={logoImage} alt="site logo" boxSize={20}></Image>
        <SearchInput />
        <HStack>
          <Switch colorScheme="green" isChecked={(colorMode === "dark")} onChange={toggleColorMode}></Switch>
          <Text>Dark mode</Text>  
        </HStack>
    </HStack>
    )
}
export default NavBar; 