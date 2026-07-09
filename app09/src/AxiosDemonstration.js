import axios from "axios"
import React, { useEffect, useReducer } from 'react';
import './css/AxiosDemonstration.css'
const AxiosDemonstration=()=>{

  const usersInitialsState={
    users : []
  }

  const usersReducerFunction=(state, action)=>{

    //return state;
    switch(action.type)
    {
    case 'request_sent'    :  
                              console.log("request sent executed")
                              return{
                                  ...state,
                                  users:[]
                              }
    case 'request_success' :  
                              console.log(action.x)
                              return{
                                ...state,
                                users : action.x
                              }
    case 'request_fail'     :
                              return{
                                ...state,
                                users : []
                              }
    default :         
                              return state
                             
    }
  }

  const[usersData, dispatchUserAction] = useReducer(usersReducerFunction, usersInitialsState);

  useEffect(()=>{
    
    dispatchUserAction({type :'request_sent'})
    
    axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{

      console.log(res.data);

      dispatchUserAction({type : 'request_success', x:res.data})

    }).catch((err)=>{

      console.error(err);

      dispatchUserAction({type : 'request_fail'})

    })

  },[])

  return(
    <div className ='container'>
      <h1> Demonstration of Axios</h1>

      <hr></hr>

      {
          (usersData.users.length != 0)? <div>
                                           <p><b>User Data : {usersData.users.length} </b></p>
                                            {/*<p>Users data available</p>*/}

                                            <table>
                                              <thead>
                                                <tr>
                                                  <th>  Name</th>
                                                  <th>  User name </th>
                                                  <th> email </th>
                                                  <th> city </th>
                                                  <th> zipcode </th>
                                                  <th> mobile no </th>
                                                  <th>Company name </th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                {
                                                  usersData.users.map((item, index)=>{
                                                    return <tr>
                                                      <td>{item.name}</td>
                                                      <td>{item.username}</td>
                                                      <td>{item.email}</td>
                                                      <td>{item.address.city}</td>
                                                      <td>{item.address.zipcode}</td>
                                                      <td>{item.phone}</td>
                                                      <td>{item.company.name}</td>
                                                  
                                                    </tr>
                                                  })
                                                }
                                              </tbody>

                                            </table>


                                        </div> :

                                        <p>no users found</p>
      }
    </div>
  )
}
export default AxiosDemonstration;