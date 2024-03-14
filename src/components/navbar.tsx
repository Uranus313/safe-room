import { HStack, Image, Input, Switch, Text } from "@chakra-ui/react";
import logoImage from "../assets/logo.webp";
function NavBar(){
    return(
    <HStack justifyContent={"space-between"} paddingX={2}>
        <Image src={logoImage} alt="site logo" boxSize={20}></Image>
        <Input borderRadius={"10px"} variant={"filled"} placeholder="Search..."></Input>
        <HStack>
          <Switch colorScheme="green"></Switch>
          <Text>Dark mode</Text>  
        </HStack>
    </HStack>
    )
}
export default NavBar; 