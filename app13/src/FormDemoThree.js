import React, { useState } from 'react';
import './css/Form.css';

const FormDemoThree = () => {

  // if we store a single element in hobbies the last entered value will be stored
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    state: '',
    gender: '',
    hobbies: [],
    terms: ''
  });

  const [formErrors, setFormErrors] = useState({
    userName: '',
    email: '',
    password: '',
    state: '',
    gender: '',
    hobbies: '',
    terms: ''
  });

  const handleInputs = (event) => {

    if (event.target.name === "terms") {

      setFormData({
        ...formData,
        [event.target.name]: event.target.checked ? 'Yes' : ''
      });

    }

    else if (event.target.name === "hobbies") {

      let temporaryhobbies = [...formData.hobbies];

      let pos = temporaryhobbies.indexOf(event.target.value);

      if (pos === -1) {
        temporaryhobbies.push(event.target.value);
      }
      else {
        temporaryhobbies.splice(pos, 1);
      }

      console.log(temporaryhobbies);

      setFormData({
        ...formData,
        [event.target.name]: temporaryhobbies
      });

    }

    else {

      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      });

    }

  }

  const submitForm = (event) => {

    event.preventDefault();

    if (validateForm()) {
      console.log("Posting data to server", formData);
    }
    else {
      console.log("Please enter valid inputs....");
      console.log(formErrors);
    }

    console.log(formData);

  }

  const validateForm = () => {

    let isValid = true;

    let errors = {};

    if (formData.userName === '') {
      isValid = false;
      errors.userName = 'user name is required';
    }
    else if (formData.userName.length < 5) {
      isValid = false;
      errors.userName = 'user name should contain minimum 5 characters';
    }

    if (formData.email === '') {
      isValid = false;
      errors.email = 'email is required';
    }
    else if (!isEmailValid(formData.email)) {
      isValid = false;
      errors.email = 'enter valid email id';
    }

    if (formData.password === '') {
      isValid = false;
      errors.password = 'password is required';
    }
    else if (!isPasswordValid(formData.password)) {
      isValid = false;
      errors.password = 'password should contain minimum 8 characters with atleast 1 capital, small, number and special character';
    }

    if (formData.state === '') {
      isValid = false;
      errors.state = 'state is required';
    }

    if (formData.gender === '') {
      isValid = false;
      errors.gender = 'gender is required';
    }

    if (formData.hobbies.length < 1) {
      isValid = false;
      errors.hobbies = 'select minimum 1 hobby';
    }

    if (formData.terms === '') {
      isValid = false;
      errors.terms = 'Accept the terms and Conditions';
    }

    console.log(errors);
    setFormErrors(errors);

    return isValid;

  }

  const isEmailValid = (email) => {

    var pattern = /^\s*[\w-+_]+(\.[\w-+_]+)*@[\w-+_]+\.[\w-+_]+(\.[\w-+_]+)*\s*$/;
    return String(email).search(pattern) !== -1;

  }

  const isPasswordValid = (password) => {

    var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return String(password).search(pattern) !== -1;

  }

  const hideErrors = (event) => {

    setFormErrors({
      ...formErrors,
      [event.target.name]: ''
    });

  }

  const displayError = (event) => {

    if (event.target.value === '') {

      setFormErrors({
        ...formErrors,
        [event.target.name]: event.target.name + ' is required'
      });

    }

  }

  return (

    <div className="container">

      <h1>Demonstration of Form - III</h1>

      <hr />

      <div>

        <form onSubmit={submitForm}>

          <div className="form-group">
            <label>User Name</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleInputs}
              className="form-control"
              onFocus={hideErrors}
              onBlur={displayError}
            />
            {formErrors.userName && <span>{formErrors.userName}</span>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputs}
              className="form-control"
              onFocus={hideErrors}
              onBlur={displayError}
            />
            {formErrors.email && <span>{formErrors.email}</span>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputs}
              className="form-control"
              onFocus={hideErrors}
              onBlur={displayError}
            />
            {formErrors.password && <span>{formErrors.password}</span>}
          </div>

          <div className="form-group">
            <label>Select State</label>

            <select
              className="form-control2"
              name="state"
              value={formData.state}
              onChange={handleInputs}
              onFocus={hideErrors}
              onBlur={displayError}
            >
              <option value="">-----Select State-----</option>
              <option value="AndhraPradesh">AndhraPradesh</option>
              <option value="Telangana">Telangana</option>
            </select>

            {formErrors.state && <span>{formErrors.state}</span>}

          </div>

          <div className="form-group">

            <h3>Gender</h3>

            <label htmlFor="male">Male</label>
            <input
              id="male"
              type="radio"
              name="gender"
              value="Male"
              onChange={handleInputs}
            />

            <label htmlFor="female">Female</label>
            <input
              id="female"
              type="radio"
              name="gender"
              value="Female"
              onChange={handleInputs}
            />

            <br />

            {formErrors.gender && <span>{formErrors.gender}</span>}

          </div>

          <div className="form-group">

            <h3>Hobbies</h3>

            <input type="checkbox" name="hobbies" value="eating" onChange={handleInputs} />
            <label>Eating</label>

            <input type="checkbox" name="hobbies" value="walking" onChange={handleInputs} />
            <label>Walking</label>

            <input type="checkbox" name="hobbies" value="reading" onChange={handleInputs} />
            <label>Reading</label>

            <input type="checkbox" name="hobbies" value="sleeping" onChange={handleInputs} />
            <label>Sleeping</label>

            <br />

            {formErrors.hobbies && <span>{formErrors.hobbies}</span>}

          </div>

          <div className="form-group">

            <label>Terms and Conditions</label>

            <input
              type="checkbox"
              name="terms"
              onChange={handleInputs}
            />

            <br />

            {formErrors.terms && <span>{formErrors.terms}</span>}

          </div>

          <div>
            <input type="submit" value="Register" />
          </div>

        </form>

      </div>

    </div>

  );

}

export default FormDemoThree;