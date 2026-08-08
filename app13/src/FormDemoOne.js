import './css/Form.css';
import React, { useState } from 'react';

const FormDemoOne = () => {

  // controlled Components automatically writes the content after every word without submit button
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUserNameInput = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
    console.log("handle user name executing");

    setUserName(event.target.value);
  }

  const handleEmailInput = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  }

  const handlePasswordInput = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    // preventDefault() - prevents the page from refresh
    event.preventDefault();
    console.log(userName, email, password);
  }

  return (
    <div className="container">
      <h1>Demonstration of Form Handling - I</h1>
      <hr />

      <h2>Register</h2>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>UserName</label>
          <input
            type="text"
            className="form-control"
            value={userName}
            onChange={handleUserNameInput}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            value={email}
            onChange={handleEmailInput}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="text"
            className="form-control"
            value={password}
            onChange={handlePasswordInput}
          />
        </div>

        <div>
          <div>
            <input type="submit" value="Register" />
          </div>
        </div>

      </form>
    </div>
  );
}

export default FormDemoOne;