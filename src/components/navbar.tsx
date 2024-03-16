import { HStack, Image,  Switch, Text, useColorMode } from "@chakra-ui/react";
import logoImage from "../assets/logo.webp";
import SearchInput from "./SearchInput";

interface Props{
  setSelectedSearch : (search : string) => void;
}
function NavBar(props: Props){
    let {toggleColorMode,colorMode}= useColorMode()
    
    return(
    <HStack justifyContent={"space-between"}  paddingX={2}>
        <Image src={logoImage} alt="site logo" boxSize={20}></Image>
        <SearchInput setSelectedSearch={props.setSelectedSearch} />
        <HStack>
          <Switch colorScheme="green" isChecked={(colorMode === "dark")} onChange={toggleColorMode}></Switch>
          <Text>Dark mode</Text>  
        </HStack>
    </HStack>
    )
}
export default NavBar; 