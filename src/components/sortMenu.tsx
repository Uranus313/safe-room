import {   Button, Menu,  MenuButton,  MenuItem,  MenuList} from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../storage/gameQueryStore";
// import GameCardSkeleton from "./gameCardSkeleton";


function SortMenu(){
    const sortOrders = [
        { value: "", label: "Relevance" },
        { value: "name", label: "Name" },
        { value: "-released", label: "Release date" },
        { value: "-metacritic", label: "Critic score" },
        { value: "-rating", label: "Average rating" },
      ];
      const [selectedOrdering,setSelectedOrdering] = useGameQueryStore(s => [s.gameQuery.order, s.setOrdering]);  
    let currentOrdering = sortOrders.find(order => order.value === selectedOrdering)
  return(
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            Order by {currentOrdering?.label ? currentOrdering.label : "Relevance"}
        </MenuButton>
        <MenuList>
          {sortOrders.map(order => <MenuItem key={order.value} onClick={() => setSelectedOrdering(order.value)}>{order.label}</MenuItem>)}
        </MenuList>
      </Menu>
      
    </>
  )
}
export default SortMenu