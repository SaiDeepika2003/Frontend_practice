import React from "react";
import { memo } from "react";
const Title=(props)=>{
  
  //destructuring name
  const {name} = props;

  console.log("Title component re-renders");

  return(
    <h1> {name} Information </h1>
  )
}
export default memo(Title);