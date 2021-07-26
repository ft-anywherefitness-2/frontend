import React from 'react'

const SignUp = (props) => {

return (
 <div className='sign-up card'>
     <h2>Register Here:</h2>
        <div className='signup form-container'>
            <form className='signup-input'>
                <label htmlFor='nameInput'>Name:
                <input 
                placeholder='Name'
                id='name'
                value= {}
                name='name'
                type='text'
                onChange={}
                />
                </label>
                <label htmlFor='usernameInput'>Username:
                <input 
                placeholder='Create a Username'
                id='username'
                value={}
                name='username'
                type='text'
                onChange={}
                />
                </label>
                <label htmlFor='passwordInput'>Password:
                <input 
                placeholder='Create a Password'
                id='password'
                value={}
                name='password'
                type='text'
                onChange={}
                />
                </label>
                <label htmlFor='nameInput'>Client
                <input 
                id='client'
                value='client'
                name='role'
                type='radio'
                onChange={}
                checked={}
                />
                <label htmlFor='nameInput'>Instructor
                <input 
                id='instructor'
                value='instructor'
                name='role'
                type='radio'
                onChange={}
                checked={}
                />
                </label>
                <button>Submit</button>
            </form>
        </div>
 </div>

    )
}


export default SignUp