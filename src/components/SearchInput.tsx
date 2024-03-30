import {    Input, InputGroup } from "@chakra-ui/react";

// import getCroppedImage from "../functions/getCroppedImage";

import { useRef } from "react";
import useGameQueryStore from "../storage/gameQueryStore";
// import GameCardSkeleton from "./gameCardSkeleton";


function SearchInput(){
    let ref = useRef<HTMLInputElement>(null)
    const setSearchText = useGameQueryStore( s => s.setSearchText);
  return(
    <form style={{width:"100%"}} onSubmit={(event)=>{
        event.preventDefault();
        if (ref.current){
            setSearchText(ref.current.value)
            console.log(ref.current.value)
        }
    }}>
      <InputGroup>
        <Input  borderRadius={"10px"} variant={"filled"} placeholder={"Search..."} ref={ref}></Input>
      </InputGroup>
    </form>  
  )
}
export default SearchInput