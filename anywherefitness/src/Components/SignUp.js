import React from 'react'
import '../Styles/Signup.css'
import Styled from 'styled-components'

const Headings = Styled.div`
background-color: rgb(61,90,128, 0.8);
padding: 0.5rem 1rem;
color: white;
padding: 1rem 1rem;

`


const SignUp = (props) => {

return (
    <div className='signup-container'>
        <form id='signup-form'>
            <div className='input-container'>
                <div className='form-header-container'><h2 className='form-header'>Register Here:</h2></div>
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
            
            <div className='field'>
                <button>Submit</button>
            </div>
        </div>
        </form>
    </div>

    )
}


export default SignUp