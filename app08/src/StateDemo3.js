import React, { useState } from 'react';
import './css/App.css';
const StateDemo3=()=>{

 const[quantity,updateQuantity] = useState(0);
 const[visibility,updateVisibility] = useState(true)

/* const increaseQuantity=()=>{
  for(let i = 1; i <= 5; i++)
  {
    updateQuantity(quantity+1)
    //updateQuantity((previousState)=>previousState+1)
     
  }
  console.log(quantity)
 }*/

 return(
  <div>
    <h1>Demonstration of State Management</h1>

    {
      visibility? <div style={{border:"3px solid green"}}>
                  <p>quantity : {quantity}</p>
                  </div>:
                  null
    }

    <p>Quantity : {quantity}</p>

    <hr></hr>

    {/*<button onClick={increaseQuantity}>Increase</button>*/}

    <button onClick={()=>{updateQuantity(quantity+1); console.log(quantity)}} disabled={visibility ? true : false}> Increase </button>

    <button onClick={()=>{if(quantity > 0)updateQuantity(quantity-1); console.log(quantity)}}> Decrease </button>
     
    {/*<button onClick={()=>{if(quantity > 0)updateQuantity(quantity-1)}}>Decrease</button>

    <button onClick={()=>updateVisibility(false)}>Hide</button>

    <button onClick={()=>updateVisibility(true)}>Show</button>*/}

    <button onClick={()=>updateVisibility(!visibility)}>{visibility ? "Hide" : "Show"}</button>
  </div>
 ) 
}
export default StateDemo3;