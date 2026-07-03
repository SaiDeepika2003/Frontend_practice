const EventHandlingDemo1 = () =>{

  const display = ()=>{
    alert("The Button is Clicked")
  }
  return(
    <div style={{backgroundColor: "#efefef", marginLeft:"100px", marginRight: "100px",padding:"20px", height:"80%"}}>
      <h1>Demonstration of Event Handling in React Functional Components</h1>
      <button onClick={display}> Click Me! </button>
      <button onClick={()=>alert("The event Triggered")}> Click Me! </button>
    </div>
    //Here display() - on loading Triggers event
    //Here display- on Click Triggers the Event
  )
}

export default EventHandlingDemo1;