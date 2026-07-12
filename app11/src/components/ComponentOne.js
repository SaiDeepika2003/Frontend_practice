import React from 'react'
import store from '../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { increment ,decrement,reset} from '../redux/features/counterOneSlice'

const ComponentOne = () => {

  const data= useSelector((state)=>state.slice1)

  const dispatch=useDispatch()

  return (
    <div>
      <h1>Component one</h1>

      <hr></hr>

      <p><b>Count : {data}</b></p>

      <button onClick={()=>{dispatch(increment())}}>Increment by 1</button>

      <button onClick={()=>{dispatch(decrement())}}>decrement by 1</button>

      <button onClick={()=>{dispatch(reset())}}>Reset</button>
    </div>
  )
}

export default ComponentOne
