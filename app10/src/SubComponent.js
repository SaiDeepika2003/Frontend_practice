import Paragraph1 from "./Paragraph1";
import Paragraph2 from "./Paragraph2";
import { memo } from "react";
const SubComponent=()=>{

  console.log("sub component re-rendered")

  return(
    <div>
      <h3>Heading....</h3>

      <Paragraph1 />
      <Paragraph2 />
    </div>
  )
}
export default memo(SubComponent);