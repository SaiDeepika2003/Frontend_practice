import React, { Component } from "react";
import "./css/StylingDemo1.css"
class StylingDemo2 extends Component
{
  Styling = {
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

  //in=line styling is given in style = {{}} object inside expression 
    render()
    {
      return(
        <div style={this.Styling}>
            <h2> Demonstration of Styling in the Class Component</h2>
        </div>
      )
    }
}

export default StylingDemo2;

