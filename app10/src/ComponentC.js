import ComponentD from "./ComponentD";
const ComponentC=(props)=>{

  const {user}= props
 
  return(
    <div className="box">
       <h3>Component C</h3>

       <p>Hello....{user}</p>

       <ComponentD user={user}/>
    </div>
  )
}
export default ComponentC;