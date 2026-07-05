import {useState} from "react";
import { useEffect } from "react";
import "./css/DemoOne.css"
const DemoOne=()=>{

  const[count,setCount] = useState(0);
  const[salary, setSalary] = useState(0);

  console.log("inside component......")

  /*useEffect(()=>
            {
               console.log("use effect executed.......")
            }
  )*/

  useEffect(()=>
            {
               console.log("use effect executed.......")
            },[]
          
  )

  /*useEffect(()=>
            {
               console.log("use effect executed......."+count+'\t'+salary);
            },[count]
  )*/
  
  return(
    <div className="container">
      <h1>Demonstration of use effect Hook</h1>

      <hr></hr>

      <p> <b> count : {count} </b></p>

      <button onClick={()=>setCount(count+1)}>Increment</button>

      <p> <b> salary : {salary}</b></p>

      <button onClick={()=>setSalary(salary+1000)}>Hike 1000</button>
    </div>
  )
}
export default DemoOne;