import React, { useState } from 'react'
import '../Styles/InstructorPage.css'



const InstructorPage = () => {
    const [blank, setBlank] = useState('')


    return (
        <div className='class-container'>


            <div className='class'>
                <div className='class-content-container'>
                    <div className='class-header'>
                        <h4>Yoga</h4>
                        <h5>25</h5>
                    </div>

                    <div class="text-box">
                        <a href="#" class="btn btn-white btn-animate">click me</a>
                    </div>

                </div>
            </div>



        </div>
        
    )
}

export default InstructorPage