const UseReducerHookDemoTwo=()=>{

  const initialStudentInfo ={

    sid: 101,
    sname : "Pavan",
    sfee : 30000,
    scourse : ["HTML", "CSS", "JAVASCRIPT"],
    saddress : "Hyderabad"
  }

  const implementStudentActions=(state, action)=>{

    switch(action)
    {
      case 'feeConcession' :
                              return{
                                ...state,
                                sfee : state.sfee - state.sfee*0.1
                              }
      case 'addReact'         :
                              let x = state.scourse
                              let pos = x.indexOf('react');
                             
                              if(pos == -1)
                              {
                               x.push('react')
                              }

                             return{
                              ...state,
                              scourse : x
                             }
    }

  }

  const[studentData, dispatchStudentAction] = useReducer(implementStudentActions, initialStudentInfo)

  return(
    <div>
      <h1>Demonstration of Use Reducer Hook - 2</h1>

      <hr></hr>

      <p><b> SID       : {studentData.sid}</b></p>
      <p><b> SNAME     : {studentData.sname}</b></p>
      <p><b> SFEE      : {studentData.sfee}</b></p>
      <p><b> SADDRESS  : {studentData.saddress}</b></p>
      <p><b> SCOURSE   : {studentData.scourse.join(', ')}</b></p>

      <button onClick={()=>dispatchStudentAction("feeConcession")}>Fee Concession 10%</button>
      
      {/*To avoid adding 2 times in array use remove StrictMode in app.js or index.js*/}
      <button onClick={()=>dispatchStudentAction("addReact")}> Add React</button>
    </div>
  )
}
export default UseReducerHookDemoTwo;