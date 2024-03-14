import { HStack, Image, Input, Switch, Text, useColorMode } from "@chakra-ui/react";
import logoImage from "../assets/logo.webp";
function NavBar(){
    let {toggleColorMode,colorMode}= useColorMode()
    
    return(
    <HStack justifyContent={"space-between"} paddingX={2}>
        <Image src={logoImage} alt="site logo" boxSize={20}></Image>
        <Input borderRadius={"10px"} variant={"filled"} placeholder="Search..."></Input>
        <HStack>
          <Switch colorScheme="green" isChecked={(colorMode === "dark")} onChange={toggleColorMode}></Switch>
          <Text>Dark mode</Text>  
        </HStack>
    </HStack>
    )
}
export default NavBar; 