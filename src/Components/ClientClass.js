import React, { useState } from 'react'
import dummyData from '../dummy-data/classes.js'

// breaks when you name argument 'class'
const ClientClasses = () => {
    const [classes] = useState(dummyData)
    const [searchTerm, setSearchTerm] = useState('')


    return (
        <div className='client-page-container'>
            <div className='searchBar'>
                <input type="text" placeholder="Search..." onChange={event => {setSearchTerm(event.target.value)}}/>
            </div>
            <div className='client-class-container'>
            {classes.filter((item) => {
                if (searchTerm == '') {
                    return item
                } else if (item.type.toLowerCase().includes(searchTerm.toLowerCase())){
                   return  item
                }
            }).map((item) => {
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
                            <a href={`/user/class/${item.id}`} style={{marginLeft:"-42px", marginTop:"10px"}}class="btn btn-white btn-animate">details</a>
                        </div>
                    </div>
                </div>
                )
            })}
            </div>
        </div>    
)
}

export default ClientClasses;


