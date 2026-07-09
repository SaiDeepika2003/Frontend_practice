import './css/App.css'
import ComponentB from './ComponentB';
import { useState } from 'react';
const ComponentA=()=>{

  const[user,setUser] = useState("Pavan")

  return(
    <div className='box'>
      <h3>Component A</h3>
      <p>Hello....{user}</p>
      <ComponentB user={user}/>
    </div>
  )
}
export default ComponentA;