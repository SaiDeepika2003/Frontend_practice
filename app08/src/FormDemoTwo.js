import React, { useState } from 'react';
import './css/App.css';
const FormDemoTwo=()=>{

  //Forms are used to take the input from the user

  const[formData, setFormData] = useState({userName:'',email:'',password:'',gender:''})
  
  const handleInputs =(event)=>{
    console.log(event.target.value)

    setFormData({

      ...formData,
      //[] - becoz its a variable
      [event.target.name]: event.target.value

    })
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(formData)
  }
  return(
    <div>
      <h1>Demonstration of Form Handling - II</h1>

      <hr></hr>

      <div>
        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <lable> UserName </lable>
            <input type="text" className="form-control" name="userName" value={formData.userName} onChange={handleInputs}/>
          </div>

          <div className="form-group">
            <lable> Email </lable>
            <input type="text" className="form-control" name="userName" value={formData.userName} onChange={handleInputs}/>
          </div>
          
          <div className="form-group">
            <lable> Password </lable>
            <input type="password" className="form-control" name="password" value={formData.userName} onChange={handleInputs}/>
          </div>

          <div>
            <input type="submit" value="Register"/>
          </div>

        </form>
      </div>
    </div>
  )
}
export default FormDemoTwo;