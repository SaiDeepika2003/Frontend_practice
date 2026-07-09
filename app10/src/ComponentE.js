import './css/App.css'
import ComponentF from './ComponentF';
import { useRef, useState } from 'react';
import { createContext } from 'react';

export const userContext = createContext();
export const ageContext = createContext();
const ComponentE=()=>{

  const[user,setUser] = useState({uname:"Pavan", age:25});
  //const[age, setAge]  = useState(25);

  return(
    <div className='box'>
      <h3>Component E</h3>
      <p>Hello....{user.uname},{user.age}</p>
     


      <userContext.Provider value={user}>
        <ComponentF/>
      </userContext.Provider>

    </div>
  )
}
export default ComponentE;