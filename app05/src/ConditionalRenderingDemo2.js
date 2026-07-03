import "./css/ConditionalRenderingDemo2.css"
const ConditionalRenderingDemo2= () =>{

  const subjects = ["HTML","CSS","JS","Bootstrap","Reactjs"]

  const studentList=[
    {sid:101, sname:"pavan", sfee:10000,scourse:"java"},
    {sid:102, sname:"prathik", sfee:10000,scourse:"python"},
    {sid:103, sname:"Sudhakar", sfee:10000,scourse:"DS"},
    {sid:104, sname:"Bhushan", sfee:10000,scourse:"python"},
    {sid:105, sname:"Madhusudhan", sfee:10000,scourse:"java"}
  ]

  const successStyle={backgroundColor:"green"}

  const errorStyle={backgroundColor:"orange"}
  return(
    <div className="container">
      <h1> Demonstration of Conditional Rendering </h1>
      <div style={(subjects.length>0)?successStyle : errorStyle}>
      <h3>Subjects</h3>
      {
          //subjects.map((item, index) =><li key={index}>{item}</li>)

          (subjects.length>0) ? ( <ul>
                                     {
                                        subjects.map((item, index)=><li key={index}>{item}</li>)
                                     }
                                    </ul>) :(
                                    <p>No Subjects found</p> 
                                    )
      }
      </div>
      <hr></hr>
      <h3>Students List</h3>
      {
        (studentList.length>0) ? (
        <table border="1" cellPadding="">
          <thread>
            <tr>
            <th>SID</th>
            <th>SNAME</th>
            <th>SFEE</th>
            <th>SCOURSE</th>
            </tr>
          </thread>
          <tbody>
            {
              studentList.map((item,index)=><tr key={index}>
                          <td>{item.sid}</td>
                          <td>{item.sname}</td>
                          <td>{item.sfee}</td>
                          <td>{item.scourse}</td>
              </tr>)
            }
          </tbody>
        </table> ):(
        <p>No Student found</p>
        )
      }
    </div>
  )
}
export default ConditionalRenderingDemo2;