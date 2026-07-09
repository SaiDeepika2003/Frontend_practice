import { useState } from "react";
import { useEffect } from "react";
import './css/App.css'
const UseEffectDemoTwo=()=>{

  const[count, setCount] = useState(0);

  const increaseCount=()=>{
    setCount(count + 1);
  }

  useEffect(()=>{
    console.log("binding....use effect")
    document.getElementById("ibtn").addEventListener("click", increaseCount)
  })

  useEffect(()=>{
      console.log("styling....use effect")
      document.getElementById("ibtn").style.cssText="color:white;background-color:black;border:0px solid black";
  },[])

  return(
    <div className="container">
      <h1>Demonstration of Use Effect</h1>

      <hr></hr>

      <p><b>Count : {count}</b></p>

      <button id="ibtn">Increment</button>
    </div>
  )
}
export default UseEffectDemoTwo;