import { useEffect } from "react";
import { useState } from "react";
import './css/App.css'
const DemoOne=()=>{

  const [count, setCount] = useState(0);
  const [salary, setSalary] = useState(0);

  /*useEffect(() =>
  {
    console.log("use effect executed....."+count,+"\t",salary)
  }
  )*/

  /*useEffect(() =>
  {
    console.log("use effect executed....."+count,+"\t",salary)
  },[]
  )*/

  useEffect(() =>
  {
    console.log("use effect executed....."+count,+"\t",salary)
  },[count]
  )

  return(
    <div className="container">
      <h1>Demostration of use Effect Hook</h1>

      <hr></hr>

      <p><b>Count : {count}</b></p>

      <button onClick={()=>setCount(count + 1)}>Increment</button>

      <hr></hr>

      <p><b>salary : {salary}</b></p>

      <button onClick={()=>setSalary(salary+1000)}>Hike 1000</button>
    </div>
  )
}
export default DemoOne;