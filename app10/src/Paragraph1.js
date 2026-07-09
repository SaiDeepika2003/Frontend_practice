import React from "react";
import { memo } from "react";
const Paragraph1=()=>{
  console.log("paragraph1 re-render");
  return(
    <div>
      <p>Paragraph1.....</p>
    </div>
  )
}
export default memo(Paragraph1);