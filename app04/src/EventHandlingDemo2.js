import React, { Component } from "react";

class EventHandlingDemo2 extends Component
{
    display = ()=>{
    alert("The Button is Clicked")
    }
    render(){

      return(
        <div style={{backgroundColor: "#efefef", marginLeft:"100px", marginRight: "100px",padding:"20px", height:"80%"}}>
          <h1>Demonstration of Event Handling in Class Component</h1>

          <button onClick={this.display}> Click Here </button>
        </div>
      )
    }
  }
export default EventHandlingDemo2;