import React from "react";
import { memo } from "react";
const Button=(props)=>{

  const {btnName, action} = props;

  console.log(btnName+"button component re-renders")
  return(
    <button onClick={action}>{btnName} Button</button>
  )
}
export default memo(Button);