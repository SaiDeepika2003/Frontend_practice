import "./css/StylingDemo1.css"
const StylingDemo1 = ()=>{
  //in react Class is a reserved name so instead use className
  //no internal styling in react as there is no head component
  //we can directly import css styling in app.js

  const Styling = {
    backgroundColor:"#efefef", 
    color:"black", 
    fontSize:"32px", 
    height:"200px", 
    width:"80%", 
    marginLeft:"100px", 
    display:"flex", 
    flexDirection:"row", 
    justifyContent:"center",
    alignItems:"center"
  }
  return(
    <div /*className="container"*/ style={Styling}>
     <h1>Demostration of Styling in React</h1>
    </div>
  )
}
export default StylingDemo1;