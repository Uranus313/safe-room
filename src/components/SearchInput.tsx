import {    Input, InputGroup } from "@chakra-ui/react";

// import getCroppedImage from "../functions/getCroppedImage";

import { useRef } from "react";
// import GameCardSkeleton from "./gameCardSkeleton";

interface Props{
  setSelectedSearch : (search : string) => void;
}
function SearchInput(props : Props){
    let ref = useRef<HTMLInputElement>(null)
    
  return(
    <form style={{width:"100%"}} onSubmit={(event)=>{
        event.preventDefault();
        if (ref.current){
            props.setSelectedSearch(ref.current.value)
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