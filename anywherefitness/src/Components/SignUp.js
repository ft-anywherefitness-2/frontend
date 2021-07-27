import React from 'react'
import '../Styles/Signup.css'
import Styled from 'styled-components'

const Headings = Styled.div`
background-color: #293241;
padding: 0.5rem 1rem;
color: #E0FBFC;
padding: 1rem 1rem;
`


const SignUp = (props) => {

return (
    <div className='signup-container'>
        <form id='signup-form'>
        <img className='signup-img' src='https://images.unsplash.com/photo-1579126038374-6064e9370f0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1317&q=80' alt='yoga ocean view'/>
            <div className='input-container'>
                <h2>Register Here:</h2>
                <Headings>
                    <h5>Please enter your name: </h5>
                    <p>Required.</p>
                </Headings>
                <div className='field'>
                    <input 
                        placeholder='Name'
                        className='text-input'
                        id='name'
                        // value= {}
                        name='name'
                        type='text'
                        // onChange={}
                    />
                </div>
            <Headings>
                <h5>Choose a username: </h5>
                <p>Required.</p>
            </Headings>
            <div className='field'>
                <input 
                    placeholder='Username'
                    className='text-input'
                    id='username'
                    // value={}
                    name='username'
                    type='text'
                    // onChange={}
                />
            </div>
            <Headings>
                <h5>Choose a password: </h5>
                <p>Required.</p>
            </Headings>
            <div className='field'>
                <input 
                    placeholder='Password'
                    className='text-input'
                    id='password'
                    // value={}
                    name='password'
                    type='text'
                    // onChange={}
                />
            </div>
            <Headings>
                <h5>Please select one: </h5>
                <p>Required.</p>
            </Headings>
            <div className='field radio-container'>
                <div className='radio-button'>
                    <input 
                        id='client'
                        className='radio'
                        value='client'
                        name='role'
                        type='radio'
                        // onChange={}
                        // checked={}
                    /><label className='radio-label'>Client</label>
                </div>

                <div className='radio-button'>
                    <input 
                        id='instructor'
                        className='radio'
                        value='instructor'
                        name='role'
                        type='radio'
                        // onChange={}
                        // checked={}
                    /><label className='radio-label'>Instructor</label>
                </div>
            </div>
            
            <div>
                <button>Submit</button>
            </div>
        </div>
        </form>
    </div>

    )
}


export default SignUp