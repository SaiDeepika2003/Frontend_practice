import { useState } from "react";
import './css/App.css'
const UseStateProblemDemo1=()=>{
  
  const [count,setCount] = useState(0)
  
  /*const increaseCount=()=>{
    setCount(count + 1)
  }
  
  const decreaseCount=()=>{
    setCount(count - 1)
  }
  
  const resetCount=()=>{
    setCount(0)
  }*/
  
  return(
    <div className="container">
      <h1>Demonstration of Use State Problem....</h1>

      <hr></hr>

      <p><b>Count : {count}</b></p>
      <button onClick={()=>setCount(count + 1)}>Increment</button>
      <button onClick={()=>{setCount(count - 1)}}>Decrement</button>
      <button onClick={()=>setCount(0)}>Reset</button>

    </div>

  )
}
export default UseStateProblemDemo1;