import React, { useState } from "react";
// import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from 'react-router';
import "../Styles/Login.css";

const initialValues = {
  username: "",
  password: ""
}
// test client && test instructor ->  will be set up after register is built
// { username: '', password: '' }
// { username: '', password: '' }



const Login = (props) => {
  const { push } = useHistory();
  const [formValues, setFormValues] = useState(initialValues);
  

  const handleChanges = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
    // console.log(formValues)
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
    .post('/api/auth/login', formValues)
    .then((res) => {
      push('/classes') /// ummm not sure where to push too yet. 
    })
    .catch((err)=> console.log(err));
  };

  return (
    <div className="login-card">
      <h2 className="login-h2">Login:</h2>
      <div className="login-form-container">
        <form className="login-input" onSubmit={handleLoginSubmit}>
          <label className="login-label" htmlFor="usernameInput">
            Username:<br></br>
            <input
              placeholder="Username"
              id="username"
              value={formValues.username}
              name="username"
              type="text"
              onChange={handleChanges}
            />
          </label>
          <label className="login-label" htmlFor="passwordInput">
            Password:<br></br>
            <input
              placeholder="Password"
              id="password"
              value={formValues.password}
              name="password"
              type="password"
              onChange={handleChanges}
            />
          </label>
          <button className='login-page-button'>Submit</button>
        </form>
      </div>
      <h3 className="login-h3">
        If you do not have a username and password, click on the 'Sign Up!'
        button to register:
      </h3>
      <button className='login-page-button'>Sign Up!</button>
    </div>
  );
};

export default Login;
