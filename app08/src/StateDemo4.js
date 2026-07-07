import React, { useState } from 'react';
const StateDemo4=()=>{

  const[quantity, updateQuantity] = useState(0);

  const[student, updateStudent] = useState({sid:101, sname:'pavan', sfee: 3000, scourse:'java', scity:'hyderabad', sstate:'Telangana'})

  const updateName=()=>{
    
  updateStudent(
      {
        ...student,
        sname : 'Aman'
      }
    )
  }

  const updateCourse=()=>{

    updateStudent(
      {
        ...student,
        scouse: "Full Stack Java Web Development"
      }
    )
  }

  const updateCity=()=>{
    updateStudent(
      {
        ...student,
        scity : "Banglore"
      }
    )
  }
  return(

    <div>
      <h1>Demonstration of State Management</h1>

      <hr></hr>

      <p>quantity : {quantity}</p>

      <button onClick={()=>updateQuantity(quantity+1)}> Increase </button>
      <button onClick={()=>updateQuantity(quantity-1)}> Decrease </button>

      <hr></hr>
      
      <h1>Student Details</h1>

      {/*<h3>Hello {student.sname}. Your course is {student.scourse}. Your address</h3>*/}
      
      <h3>SID : {student.sid}</h3>
      <h3>SNAME : {student.sname}</h3>
      <h3>SFEE : {student.sfee}</h3>
      <h3>SCOURSE : {student.scourse}</h3>
      <h3>SCITY : {student.scity} </h3>
      <h3>SSTATE: {student.sstate}</h3>

      <hr></hr>

      <button onClick={updateName}>Update Name</button>
      <button onClick={updateCourse}>Update Course</button>
      <button onClick={updateCity}>Update City</button>
      <button onClick={()=>updateStudent({...student, sstate:"Karnataka"})}> Update State </button>
    </div>
  )
}
export default StateDemo4;