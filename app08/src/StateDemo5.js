import React, { useState } from 'react';
import "./css/StateDemo5.css"
const StateDemo5=()=>{

  //spread Operator is used to copy the object content
  //map - iterate through all the elements, returns array
  //filter - based on condition we get the value, returns array

  const initialState =[
    {eid: 101, ename:"pavan", esalary:10000, eaddress:"hyderabad", email:"pavan@gmail.com"},
    {eid: 102, ename:"krishna", esalary:10000, eaddress:"hyderabad", email:"krishna@gmail.com"},
    {eid: 103, ename:"pavani", esalary:10000, eaddress:"hyderabad", email:"pavani@gmail.com"},
    {eid: 104, ename:"karthik", esalary:10000, eaddress:"hyderabad", email:"karthik@gmail.com"},
    {eid: 105, ename:"kiran", esalary:10000, eaddress:"hyderabad", email:"kiran@gmail.com"},
    {eid: 106, ename:"varun", esalary:10000, eaddress:"hyderabad", email:"varun@gmail.com"},
    {eid: 107, ename:"shiva", esalary:10000, eaddress:"hyderabad", email:"shiva@gmail.com"},
    {eid: 108, ename:"vishnu", esalary:10000, eaddress:"hyderabad", email:"vishnu@gmail.com"},
    {eid: 109, ename:"vikram", esalary:10000, eaddress:"hyderabad", email:"vikram@gmail.com"},
    {eid: 110, ename:"vijay", esalary:10000, eaddress:"hyderabad", email:"vijay@gmail.com"}
  ]

  const[empList, updateEmpList] = useState(initialState)

  const deleteEmployee=(uid)=>{
    //console.log(empList)
    const updatedItems = empList.filter((item,index)=>
                                {
                                  if(item.eid !== uid)
                                    return item;
                                }
                              )
          console.log(updatedItems)
          updateEmpList(updatedItems)

  }
  
  const deleteAllEmployees=()=>{
    updateEmpList([])
  }

  const hikeEmployee=(uid)=>{
    
    const updatedSalaries = empList.map((item, index)=>
                                       {

                                        if(item.eid !== uid)
                                        {
                                          return{
                                                   ...item,
                                                   esalary:item.esalary + item.esalary*0.5
                                                }
                                        }
                                        return item;
                                       }
                                      )
                                    updateEmpList(updatedSalaries)
  }

  const hikeAllEmployees=()=>{
        const updatedSalaries = empList.map((item, index)=>
                                {
                                  return{
                                            ...item,
                                            esalary: item.esalary+item.esalary*0.5
                                        }
                                }
                              )
                              //console.log(updatedSalaries)
                          updateEmpList(updatedSalaries)
  }
  
  const addEmployee=()=>{
    //console.log("add Employee")

    updateEmpList([
      ...empList,
      {eid: 111, ename:"vijayanthi", esalary:10000, eaddress:"hyderabad", email:"vijayanthi@gmail.com"}
    ])
  }
  return(
    <div>
      <h1> Demonstration of State Management </h1>

      <hr></hr>
      <button onClick={addEmployee}>Add New Employee</button>
      <button onClick={hikeAllEmployees}>Hike All</button>
      <button onClick={deleteAllEmployees}>Delete All</button>
      <h2>Employee List : {empList.length}</h2>

      {
        (empList.length>0)? <table>
                              <thread>
                                <tr>
                                  <th>EID</th>
                                  <th>ENAME</th>
                                  <th>ESAL</th>
                                  <th>EADDRESS</th>
                                  <th>EMAIL</th>
                                  <th>HIKE</th>
                                  <th>DELETE</th>
                                </tr>
                              </thread>
                              <tbody>
                                {
                                  empList.map((item,index)=><tr key={index}>
                                                              <td>{item.eid}</td>
                                                              <td>{item.ename}</td>
                                                              <td>{item.esalary}</td>
                                                              <td>{item.eaddress}</td>
                                                              <td>{item.email}</td>
                                                              {/*<td><button onClick={deleteEmployee(item.eid)}></button></td>
                                                              -- on load the changes takes place so use arrow function*/}
                                                              <td><button onClick={()=>deleteEmployee(item.eid)}>Delete</button></td>
                                                              <td><button onClick={()=>hikeEmployee(item.eid)}>Hike 50%</button></td>
                                                          </tr>)
                                }
                              </tbody>
                            </table> :
                            <p>Employees not found</p>
      }
    </div>
  )
}
export default StateDemo5;
