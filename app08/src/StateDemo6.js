const StateDemo6=()=>{

  const[subjects, setSubjects] = useState(["HTML","CSS","JavaScript","BootStrap"])
  
  const addCourse=()=>{

    const x = [...subjects, "React"]

    setSubjects(x)

    //setSubjects([...subjects,"React"])
  }
  return(
    <div>
      <h1>Demonstration of State Management</h1>

      <hr></hr>

      <button onClick={addCourse}>Add new Course</button>

      <h2>Subjects List : {subjects.length}</h2>
      {
        (subjects.length>0)? <ul>
                             {
                               subjects.map((item,index)=><li key={index}>{item}</li>)

                             }
                             </ul> : <p> subjects not found </p>
      }

      <button onClick={addCourse}>Add new Course</button>
    </div>
  )
}
export default StateDemo6;