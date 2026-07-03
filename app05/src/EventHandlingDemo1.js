const { Component } = require("react");

class EventHandlingDemo1 extends Component
{
  render()
  {
    return(
      <div style={{backgroundColor:"#efefef", marginLeft:"100px",marginRight:"0px",padding: "20px"}}>
       <h1>Demostration of Event Handling in React Functional Component</h1>
       <button onClick={this.display}>Click Here</button>
      </div>
    )
  }
}
export default EventHandlingDemo1;