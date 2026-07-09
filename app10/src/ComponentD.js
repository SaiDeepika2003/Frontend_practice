const ComponentD=(props)=>{
  
  const {user} = props;
  return(
    <div className="box">
       <h3>Component D</h3>

       <p>Hello....{user}</p>
    </div>
  )
}
export default ComponentD;