const UseReducerHookDemoOne=()=>{

  const initialQuantity = 0;

  const implementQuantityActions=(state, action)=>{

    switch(action)
    {
      case "increment": 
                            return state + 1;
      case "decrement":     
                          if(state != 0)
                            return state - 1;
                          else
                            return state;
     
      case "reset"    :
                            return 0;
                            
      default :
                   return state;
    }

  }

  const[quantity, dispatchQuantityAction] = useReducer(implementQuantityActions, initialQuantity);

  //console.log(useReducer(implementQuantityActions, initialQuantity))

  return(
    <div>

      <h1> Demonstration of Use Reducer Hook - 1 </h1>

      <hr></hr>

      <p> Quantity : {quantity}</p>

      <button onClick={()=>dispatchQuantityAction("increment")}> Increment</button>

      <button onClick={()=>dispatchQuantityAction("decrement")}> Decrement </button>

      <button onClick={()=>dispatchQuantityAction("reset")}> Reset </button>

    </div>
  )
}
export default UseReducerHookDemoOne;