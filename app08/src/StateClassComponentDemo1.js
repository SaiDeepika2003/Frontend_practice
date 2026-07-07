import { Component } from "react";
import './css/App.css';

class StateClassComponentDemo1 extends Component
{

      /*quantity = 0;

      item = "Chicken Biryani";*/

      constructor()
      {
        super();
        this.state=
        {
          quantity:0,
          item: "Chicken Biryani"
        }
        
        //console.log(("constructor Rendered again"))
      }


      increaseQuantity=()=>{

        /*this.quantity = this.quantity+1;
        console.log(this.quantity)*/

        //alert("alert")
        
        //setState is an in - built method to update state
        //setState only accepts the type of data present in the state
        //Class component only render method will be re-rendered using setState
        
        this.setState(
          {
            quantity: this.state.quantity+1
          }
        )
        //console.log(this.state.quantity)
      }

      decreaseQuantity=()=>
      {
          if(this.state.quantity>0)
          {
            this.setState(
            {
              quantity: this.state.quantity-1
            }
          )
          }
      }
      
      changeItem=()=>{

        this.setState({
          item:"Mutton Biryani"
        })
      }
    render()
    {  

      console.log("render method rendered again...");

      return(
     
        <div id="container">
          <h1>Demonstration of State in Class Component</h1>

          <h4>{this.state.item} : {this.state.quantity}</h4>

          <hr></hr>

          <button onClick={()=>this.setState({quantity:this.state.quantity+1})}>Increase Quantity</button>


          <button onClick={this.decreaseQuantity}>Decrease Quantity</button>


          <button onClick={this.changeItem}>Change to Mutton</button>

        </div>
            

      )
  }
}

export default StateClassComponentDemo1;