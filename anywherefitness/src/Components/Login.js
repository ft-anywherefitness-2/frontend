import React from 'react'
import '../Styles/Login.css'

const Login = (props) => {


    return (
        <div className='login-card'>
            <h2 className='login-h2'>Login:</h2>
            <div className='login-form-container'>
                <form className='login-input'>
                    <label className='login-label' htmlFor='usernameInput'>Username:<br></br>
                    <input 
                    placeholder='Username'
                    id='username'
                    // value=''
                    name='username'
                    type='text'
                    // onChange=''
                    />
                    </label>
                    <label className='login-label' htmlFor='passwordInput'>Password:<br></br>
                    <input
                    placeholder='Password'
                    id='password'
                    // value=''
                    name='password'
                    type='password'
                    // onchange=''
                    />
                    </label>
                    <button className='login-page-button'>Submit</button>
                </form>
            </div>
            <h3 className='login-h3'>If you do not have a username and password, click on the 'Sign Up!' button to register:</h3>
            <button className='login-page-button'>Sign Up!</button>
        </div>
    )
}

export default Login