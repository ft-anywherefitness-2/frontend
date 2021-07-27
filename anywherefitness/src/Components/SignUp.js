import React from 'react'
import '../Styles/Signup.css'

const SignUp = (props) => {

return (
    <div className='signup-container'>
        <form id='signup-form'>
        <h2>Register Here:</h2>
        <div className='signup-img'>{/* Empty for background image */}</div>
            <div className='field'>
                <label htmlFor='nameInput'>Name:
                <input 
                placeholder='Name'
                id='name'
                // value= {}
                name='name'
                type='text'
                // onChange={}
                />
                </label>
            </div>

            <div>
                <label htmlFor='usernameInput'>Username:
                <input 
                placeholder='Create a Username'
                id='username'
                // value={}
                name='username'
                type='text'
                // onChange={}
                />
                </label>
            </div>
            
            <div>
                <label htmlFor='passwordInput'>Password:
                <input 
                placeholder='Create a Password'
                id='password'
                // value={}
                name='password'
                type='text'
                // onChange={}
                />
                </label>
            </div>
            
            <div>
                <label htmlFor='nameInput'>Client
                <input 
                id='client'
                value='client'
                name='role'
                type='radio'
                // onChange={}
                // checked={}
                />
                </label>
                <label htmlFor='nameInput'>Instructor
                <input 
                id='instructor'
                value='instructor'
                name='role'
                type='radio'
                // onChange={}
                // checked={}
                />
                </label>
            </div>
            
            <div>
                <button>Submit</button>
            </div>
        </form>
    </div>

    )
}


export default SignUp