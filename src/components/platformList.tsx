import { HStack, Icon} from "@chakra-ui/react";

import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid,
  } from "react-icons/fa";
  import { MdPhoneIphone } from 'react-icons/md';
  import { SiNintendo } from 'react-icons/si';
  import { BsGlobe } from 'react-icons/bs';
  import { IconType } from "react-icons";
import { Platform } from "../entities/entities";

interface Props{
    platforms : Platform[];
}
function PLatformList(props : Props){
    const iconMap: { [key: string]: IconType } = { 
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux, 
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe
      }
    return(
        <HStack>
            {props.platforms.map(platform => <Icon key={platform.id} as={iconMap[platform.slug]}></Icon>)}
        </HStack>
    )
}
export default PLatformList