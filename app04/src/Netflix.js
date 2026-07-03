import React from "react";
import "./css/Netflix.css";
const Netflix = () =>{

  const display=()=>{

        /*console.log(document.getElementById("answer"))

        document.getElementById("answer").classList.toggle("display")
        document.getElementById("btn").textContent="-";

        console.log(document.getElementById("answer"))*/

        document.getElementById("answer").classList.toggle("display");
 
        if(document.getElementById("btn").textContent === "+")
        {
          document.getElementById("btn").textContent = "-";
        }
        else
        {
          document.getElementById("btn").textContent="+";
        }
  };
return(
  <div style={{backgroundColor: "#efefef", marginLeft:"100px", marginRight: "100px",padding:"20px", height:"80%"}}>
          <h1>Netflix Event Handling</h1>

          <button className="btn1" onClick={display}> Click Here </button>

          <hr></hr>

          <div id="element">

          <div id="question">

            <p> What is NetFlix ? </p>
            <button id="btn" onClick={display}>+</button>

          </div>

          <div id="answer" className="display">

          <p>Netflix is a streaming service that offers a wide-varity of award- winning TV shows, movies, anime, documentaries and more - on thousands of internet- connected devices.</p>

          <p>You can watch as much as you want, whenever you want, without a single ad - all for one monthly price. 
            There i something always new to discover, and new TV shows and movies are added every week! </p>

          </div>

          <button className ="btn1"onClick={display}> Click Here </button>

          </div>
  </div>
)
}
export default Netflix;