import { Component } from "react";

class JSXDemoClassComponent extends Component
{
    //in class we have to directly give the variable name without let, const, var
    //Class component extends Component present in react
    //To access the class variables use this keyword
    
      firstName = "Teks";
      lastName = "Academy";

      branch={
        name: "KPHB Branch",
        hno: "3/333/52",
        area: "KPHB",
        city: "Hyderabad",
        state: "Telangana",
        pincode: 500123
      }

      branchNames=["KPHB", "Secundrabad", "Hi-Tech City","Dilsuknagar","Ameerpet"]

      /*display()
      {
         return <li> {item} </li>
      }*/
      render()
      {
         return(
          <div>
            <h1>Demonstration of Data Binding</h1>
            <h1>Class Component</h1>
            <h1>Welcome to{this.firstName} {this.lastName}</h1>
            <h1>Address</h1>
            <p>Branch Name : {this.branch.name}</p>
            <p>HNo: {this.branch.hno}</p>
            <p>Area : {this.branch.area}</p>
            <p>City: {this.branch.city}</p>
            <p>State: {this.branch.state}</p>
            <p>Pincode: {this.branch.pincode}</p>

            <hr/>
            
            <p>Branches: {this.branchNames.join(", ")}</p>

            <hr/>

            <h3>Branch Names</h3>
            <ol>
              {
                //this.branchNames.map(this.display)
                this.branchNames.map((item, index) => <li>{item}</li>)
              }
            </ol>

          </div>
         )
      }
}

export default JSXDemoClassComponent;