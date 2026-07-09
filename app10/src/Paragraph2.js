import React from "react";
import { memo } from "react";

//memo avoids unnecessary render

const Paragraph2=()=>{
      console.log("paragraph2 re-render");
      return(
        <div>
          <p>Paragraph2.....</p> 
        </div>
      )
}
export default memo(Paragraph2);