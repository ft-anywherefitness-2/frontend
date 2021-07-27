import React, { useState } from 'react'
import '../Styles/InstructorPage.css'
import dummyData from '../dummy-data/classes.js'




const InstructorPage = () => {
    const [classes] = useState(dummyData)
    console.log(classes)

    // breaks when you name argument 'class'
    const getClasses = () => {
        return (
            <div className='class-container'>
            {classes.map((item) => {
                return (
                        <div className='class'>
                            <div className='class-content-container'>
                                <div className='class-header'>
                                    <h5>{item.type}</h5>
                                    <h4>{item.capacity}</h4>
                                </div>
                                <div className='text-box'>
                                    <a href="#" class="btn btn-white btn-animate">click me</a>
                                </div>
                            </div>
                        </div>
                        )
                })}
            </div>
        )
    }







    return (
        <div className='instructor-page-container'>
            {getClasses()}
        </div>
    )
}

export default InstructorPage