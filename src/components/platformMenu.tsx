import {   Button, Menu,  MenuButton,  MenuItem,  MenuList,  Text } from "@chakra-ui/react";
import useDataList from "../hooks/useDataList";
// import getCroppedImage from "../functions/getCroppedImage";
import { Platform } from "./gameList";
import { BsChevronDown } from "react-icons/bs";
// import GameCardSkeleton from "./gameCardSkeleton";

interface Props{
  setSelectedPlatform : (platform : Platform | null) => void;
  selectedPlatform : Platform | null;
}
function PlatformMenu(props : Props){
  let {dataList,error,isLoading} = useDataList<Platform>("/platforms")
  return(
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {props.selectedPlatform ? <Text>{props.selectedPlatform.name}</Text> : <Text>Platforms</Text>}
        </MenuButton>
        <MenuList>
        <MenuItem onClick={() => props.setSelectedPlatform(null)}>{"all platforms"}</MenuItem>
          {dataList.map(platform => <MenuItem key={platform.id} onClick={() => props.setSelectedPlatform(platform)}>{platform.name}</MenuItem>)}
        </MenuList>
      </Menu>
      
    </>
  )
}
export default PlatformMenu