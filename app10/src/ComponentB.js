import ComponentC from "./ComponentC";
const ComponentB=(props)=>{

  /*props are used to pass the data from one component 
  to the other component */


  const{user} = props

  return(
    <div className="box">
       <h3>Component B</h3>

       <p>Hello...{user}</p>

       <ComponentC user={user}/>
    </div>
  )
}
export default ComponentB;