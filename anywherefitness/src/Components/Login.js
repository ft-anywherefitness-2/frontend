import React from 'react'

const Login = (props) => {


    return (
        <div className='login-card'>
            <h2>Login:</h2>
            <div className='login form-container'>
                <form className='login-input'>
                    <label htmlFor='usernameInput'>Username:</label>
                    <input 
                    placeholder='Username'
                    id='username'
                    // value={}
                    name='username'
                    type='text'
                    // onChange={}
                    />
                    <label htmlFor='passwordInput'>Password:</label>
                    <input
                    placeholder='Password'
                    id='password'
                    // value={}
                    name='password'
                    type='password'
                    // onchange={}
                    />
                    <button>Submit</button>
                </form>
            </div>
            <h3>If you do not have a username and password, click on the 'Sign Up!' button to register:</h3>
            <button>Sign Up!</button>
        </div>
    )
}

export default Login