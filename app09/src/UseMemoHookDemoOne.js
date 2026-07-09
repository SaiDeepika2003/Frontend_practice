import { useState, useMemo } from "react";
import './css/App.css'

const UseMemoHookDemoOne=()=>{

  const[counter1, setCounter1] = useState(0);
  const[counter2, setCounter2] = useState(0);

  const isEven = useMemo(()=>{

      let i = 1;

      while(i <= 150000)
      {
        i++;
        console.log(i);
      }
      return (counter1 %2 == 0) ? "even" : "odd";
      
    },[counter1]);
    
    console.log(isEven);
  return(
    <div className="container">
      <h1>Demonstration of Use Memo Hook - 1</h1>

      <hr></hr>

      <p><b> Counter1 : {counter1} - {isEven}</b></p>

      <button onClick={()=>setCounter1(counter1+1)}>Increment Counter 1</button>

      <hr></hr>

      <p><b> Counter2 : {counter2} </b></p>

      <button onClick={()=>setCounter2(counter2+ 1)}>Increment Counter 2</button>
    </div>
  );
};
export default UseMemoHookDemoOne;