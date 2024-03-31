import {    Input, InputGroup } from "@chakra-ui/react";

// import getCroppedImage from "../functions/getCroppedImage";

import { useRef } from "react";
import useGameQueryStore from "../storage/gameQueryStore";
import { useNavigate } from "react-router-dom";
// import GameCardSkeleton from "./gameCardSkeleton";


function SearchInput(){
    let ref = useRef<HTMLInputElement>(null)
    const navigate = useNavigate();
    const setSearchText = useGameQueryStore( s => s.setSearchText);
    // const searchText = useGameQueryStore( s => s.gameQuery.search);
  return(
    <form style={{width:"100%"}} onSubmit={(event)=>{
        event.preventDefault();
        if (ref.current){
            setSearchText(ref.current.value)
            // console.log(ref.current.value)
        }
        navigate("/");
    }}>
      <InputGroup>
        <Input  borderRadius={"10px"} variant={"filled"} placeholder={"Search..."} ref={ref} ></Input>
      </InputGroup>
    </form>  
  )
}
export default SearchInput