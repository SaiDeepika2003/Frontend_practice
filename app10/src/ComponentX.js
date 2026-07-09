import ComponentH from "./ComponentH";
import { useContext } from "react";
import { userContext } from "./ComponentE";
import { ageContext } from "./ComponentE";
const ComponentX=()=>{

  const user = useContext(userContext);

  //const age = useContext(ageContext);

  return(
    <div className="box">
      <h3>Component X</h3>

      <p>Hello...{user.uname}</p>
      <p>Hello....{user.age}</p>
      <ComponentH />
    </div>
  )
}
export default ComponentX;