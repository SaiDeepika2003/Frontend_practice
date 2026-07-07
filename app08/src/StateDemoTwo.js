import './css/App.css';
import React, { useState } from 'react';
const StateDemoTwo=()=>{

  //let quantity = 0;

  //let item = "Chicken Biryani";

  /*const increaseQuantity=()=>{
    quantity = quantity + 1;
    console.log(quantity)
  }*/

  const[quantity, updateQuantity] = useState(0);
  const[item,updateItem] = useState("Chicken Biryani");

  /*const increaseQuantity=()=>{
    updateQuantity(quantity+1)
  }*/
  
  const decreaseQuantity=()=>{

    if(quantity > 0)
    {
      updateQuantity(quantity-1)
    }
  }

  const changeItem=()=>{
    updateItem("Mutton Biryani")
  }
  
  return(
    <div>
      <h1> Demostration of State Management in Functional Component</h1>

      <hr></hr>

      <p><b>{item} : {quantity}</b></p>

      <hr></hr>

      <button onClick={()=>updateQuantity(quantity+1)}>Increase</button>

      <button onClick={decreaseQuantity}>Decrease</button>

      <button onClick={changeItem}> Change to Mutton </button>
    </div>
  )
}

export default StateDemoTwo;