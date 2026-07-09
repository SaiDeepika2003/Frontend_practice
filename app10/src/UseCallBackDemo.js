import React, { useCallback } from "react";
import { useState } from "react";
import Title from "./Title";
import Data from "./Data";
import Button from "./Button";
import './css/App.css'
const UseCallBackDemo=()=>{

  const [age, setAge] = useState(36);

  const [salary, setSalary] = useState(30000);

  const [ename, setEname] = useState("KALYAN");

  const increaseAge= useCallback(()=>{
    setAge(age + 1);
  },[age])

  const increaseSalary= useCallback(()=>{
    setSalary(salary+2000);
  },[salary])

  console.log("main component re-renders");

  return(
    <div className="container">
      <h1>Demonstration of use call back function</h1>

      <hr></hr>
      
      <Title name={ename} />
      {/*<h3>{ename} Information</h3>*/}

      {/*<p><b>Age : {age}</b></p>*/}

      <Data  data={age} pname="Age"/>

      <Button  btnName="Age" action={increaseAge}/>

      <hr></hr>

      <Data data={salary} pname="Salary" />

      <Button btnName="Hike" action={increaseSalary} />

      {/*<button onClick={()=>setAge(age + 1)}>Increment Age</button>*/}
    </div>
  )
}
export default UseCallBackDemo;