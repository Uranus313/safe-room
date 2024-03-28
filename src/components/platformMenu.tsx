import {   Button, Menu,  MenuButton,  MenuItem,  MenuList,  Text } from "@chakra-ui/react";

// import getCroppedImage from "../functions/getCroppedImage";

import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import useFindPlatform from "../hooks/useFindPlatform";
// import GameCardSkeleton from "./gameCardSkeleton";

interface Props{
  setSelectedPlatform : (platform : number | null) => void;
  selectedPlatformID : number | null;
}
function PlatformMenu(props : Props){
  let {data : dataList} = usePlatform();
  let currentPlatform = useFindPlatform(props.selectedPlatformID);
  return(
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {currentPlatform ? <Text>{currentPlatform.name}</Text> : <Text>Platforms</Text>}
        </MenuButton>
        <MenuList>
        <MenuItem onClick={() => props.setSelectedPlatform(null)}>{"all platforms"}</MenuItem>
          {dataList?.results.map(platform => <MenuItem key={platform.id} onClick={() => props.setSelectedPlatform(platform.id)}>{platform.name}</MenuItem>)}
        </MenuList>
      </Menu>
      
    </>
  )
}
export default PlatformMenu