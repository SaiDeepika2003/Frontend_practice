import './css/App.css';
const Demo=()=>{
  
  let quantity = 0;

  let item = "Chicken Biryani"

  function increaseQuantity()
  {
    quantity = quantity + 1;
    console.log(count);
  }
  
  return(
    <div id = "container">
      <h1>Demo Component</h1>

      <p>{item} : <b>{quantity}</b></p>

      <hr></hr>

      <button onClick={increaseQuantity}>Increase</button>
    </div>
  )
}
export default Demo;