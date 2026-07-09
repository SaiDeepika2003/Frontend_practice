import SubComponent from "./SubComponent";
import { useState } from "react";
import './css/App.css'
const MemoFunctionDemo=()=>{

  const[count,setCount] = useState(10);

  console.log("main component re-rendered");

  return(
    <div className="container">
      <h1>
        Memo Function Demonstration
      </h1>

      <hr></hr>

      <SubComponent/>

      <hr></hr>

      <p><b>Count : {count}</b></p>

      <button onClick={()=>setCount(count + 1)}> increment </button>
    </div>
  )
}
export default MemoFunctionDemo;