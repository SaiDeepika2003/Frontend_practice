import { memo } from "react";
const Data=(props)=>{

  const {data, pname} = props;

  console.log(pname + "Data component re-render")

  return(
    <p><b>{pname} : {data}</b></p>

  )
}
export default memo(Data);