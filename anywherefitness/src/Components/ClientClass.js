import React, { useState } from 'react'
import dummyData from '../dummy-data/classes.js'

// breaks when you name argument 'class'
const ClientClasses = () => {
    const [classes] = useState(dummyData)

    return (
        <div className='client-class-container'>
            {classes.map((item) => {
                return (
                <div className='client-class'>
                    <div className='class-content-container'>
                        <div className='class-header'>
                            <h3>{item.type}</h3>
                            <p>{item.date}</p>
                            <p>{item.time}</p>
                            <p>{item.intensity}</p>
                            <p>{item.location}</p>
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

export default ClientClasses