import {   Button, Menu,  MenuButton,  MenuItem,  MenuList,  Text } from "@chakra-ui/react";

// import getCroppedImage from "../functions/getCroppedImage";

import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import useFindPlatform from "../hooks/useFindPlatform";
import useGameQueryStore from "../storage/gameQueryStore";
// import GameCardSkeleton from "./gameCardSkeleton";


function PlatformMenu(){
  let {data : dataList} = usePlatform();
  const [selectedPlatformID,setSelectedPlatform] = useGameQueryStore(s => [s.gameQuery.platform_id, s.setPlatformId]);
  let currentPlatform = useFindPlatform(selectedPlatformID);
  return(
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {currentPlatform ? <Text>{currentPlatform.name}</Text> : <Text>Platforms</Text>}
        </MenuButton>
        <MenuList>
        <MenuItem onClick={() => setSelectedPlatform(null)}>{"all platforms"}</MenuItem>
          {dataList?.results.map(platform => <MenuItem key={platform.id} onClick={() => setSelectedPlatform(platform.id)}>{platform.name}</MenuItem>)}
        </MenuList>
      </Menu>
      
    </>
  )
}
export default PlatformMenu