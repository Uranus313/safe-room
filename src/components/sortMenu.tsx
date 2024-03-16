import {   Button, Menu,  MenuButton,  MenuItem,  MenuList} from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
// import GameCardSkeleton from "./gameCardSkeleton";

interface Props{
  setSelectedOrdering : (ordering : string) => void;
  selectedOrdering: string;
}
function SortMenu(props : Props){
    const sortOrders = [
        { value: "", label: "Relevance" },
        { value: "name", label: "Name" },
        { value: "-released", label: "Release date" },
        { value: "-metacritic", label: "Critic score" },
        { value: "-rating", label: "Average rating" },
      ];
    let currentOrdering = sortOrders.find(order => order.value === props.selectedOrdering)
  return(
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            Order by {currentOrdering?.label ? currentOrdering.label : "Relevance"}
        </MenuButton>
        <MenuList>
          {sortOrders.map(order => <MenuItem key={order.value} onClick={() => props.setSelectedOrdering(order.value)}>{order.label}</MenuItem>)}
        </MenuList>
      </Menu>
      
    </>
  )
}
export default SortMenu