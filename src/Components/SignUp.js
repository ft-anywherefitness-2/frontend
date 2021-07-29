import React, { useState } from "react";
import "../Styles/Signup.css";
import Styled from "styled-components";
import { useHistory } from 'react-router';
import axios from 'axios';

const Headings = Styled.div`
background-color: rgb(61,90,128, 0.8);
padding: 0.5rem 1rem;
color: white;
padding: 1rem 1rem;
`;

const initialValues = { 
  name: "", 
  username: "", 
  password: "", 
  role: "" 
};

const SignUp = (props) => {
  const [formValues, setFormValues] = useState(initialValues);
  const { push } = useHistory();

  
  // Change handler
  const onChange = (event) => {
   
    const { name, value, type, checked } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;
    setFormValues({ ...formValues, [name]: valueToUse });
    console.log(formValues)
  };

  const handleSignupClick = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name.trim(),
      username: formValues.username.trim(),
      password: formValues.password.trim(),
      role:  formValues.role
    };

    axios.create({
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
         "Access-Control-Allow-Origin": '*' 
      }
    })
    .post('https://secret-peak-42801.herokuapp.com//api/auth/register', newUser)
    .then(res => {
      console.log(res.data)
      push('/login')
    })
    .catch((err) => console.log(err, "err"))
  }

  return (
    <div className="signup-container">
      <form id="signup-form" onSubmit={handleSignupClick}>
        <div className="input-container">
          <div className="form-header-container">
            <h2 className="form-header">Register Here:</h2>
          </div>
          <Headings>
            <h5>Please enter your name: </h5>
            <p className="required-input">Required.</p>
          </Headings>
          <div className="field">
            <input
              className="text-input"
              type="text"
              id="name-text"
              name="name"
              value={formValues.value}
              onChange={onChange}
              placeholder="Name"
            />
          </div>
          <Headings>
            <h5>Choose a username: </h5>
            <p className="required-input">Required.</p>
          </Headings>
          <div className="field">
            <input
              className="text-input"
              type="text"
              id="username"
              name="username"
              value={formValues.value}
              onChange={onChange}
              placeholder="Username"
            />
          </div>
          <Headings>
            <h5>Choose a password: </h5>
            <p className="required-input">Required.</p>
          </Headings>
          <div className="field">
            <input
              className="text-input"
              type="text"
              id="password"
              name="password"
              value={formValues.value}
              onChange={onChange}
              placeholder="Password"
            />
          </div>
          <Headings>
            <h5>Please select one: </h5>
            <p className="required-input">Required.</p>
          </Headings>
          <div className="field radio-container">
            <div className="radio-button">
              <input
                type="radio"
                name="role"
                className="radio"
                value="client"
                onChange={onChange}
                checked={formValues.role === "client"}
              />
              <label className="radio-label">Client</label>
            </div>

            <div className="radio-button">
              <input
                type="radio"
                name="role"
                className="radio"
                value="instructor"
                onChange={onChange}
                checked={formValues.role === "instructor"}
              />
              <label className="radio-label">Instructor</label>
            </div>
          </div>

          <div className="field">
            <button>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
