import { useState } from "react";
import './css/App.css';
const Demo=()=>{
  
  const [quantity, setQuantity] = useState(0);

  let item = "Chicken Biryani"

  function increaseQuantity()
  {
    setQuantity(quantity + 1);
    console.log(quantity + 1);
  }
  
  return(
    <div className = "container">
      <h1>Demo Component</h1>

      <p>{item} : <b>{quantity}</b></p>

      <hr></hr>

      <button onClick={increaseQuantity}>Increase</button>
    </div>
  )
}
export default Demo;