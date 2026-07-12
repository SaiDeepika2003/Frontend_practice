import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeRole, hike } from '../redux/features/employeeObjectSlice'


const ComponentTwo = () => {

    const {eid,ename,esal,eaddress,erole}=useSelector((state)=>state.slice2)


    const dispatch=useDispatch();




  return (
    
    <React.Fragment>
        <h1>Employee Object</h1>
        <hr></hr>

        <p><b>EID : {eid}</b></p>
        <p><b>ENAME : {ename}</b></p>
        <p><b>ESALARY : {esal}</b></p>
        <p><b>EADDRESS :{eaddress}</b></p>
        <p><b>EROLE : {erole}</b></p>

        <button onClick={()=>dispatch(hike(20000))}>Increment</button>

        <button onClick={()=>dispatch(changeRole())}>Change Role</button>


    </React.Fragment>
  )
}

export default ComponentTwo
