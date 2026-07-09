import React from "react";
import { useParams } from "react-router-dom";
const Home=()=>{

  const Parameters = useParams()

  console.log(Parameters)
  return(
    <div>
      <h3>Home page</h3>

      <p><b>SID : {Parameters.sid}</b></p>

      <p><b>SNAME : {Parameters.sname}</b></p>
    </div>
  )
}
export default Home;