import React, { useState } from "react";
import dummyData from "../dummy-data/classes.js";
import  { useHistory } from 'react-router';

// breaks when you name argument 'class'
const ClientClasses = (props) => {
  const [classes] = useState(dummyData);
  const { push } = useHistory();


  return (
    <div className="class-container">
      {classes.map((item) => {
        return (
          <div className="class instructor-class">
            <div className="class-content-container">
              <div className="class-header">
                <h3>{item.type}</h3>
                <p>Date: {item.date} - Time: {item.time}</p>
                <p>Location: {item.location}</p>
                <p>Instructor: {item.instructor_name}</p>
                 <p>Intensity: {item.intensity}</p>
               {/* <p>Date: {item.capacity}</p>
                <p>Class Time: {item.time}</p>
                <p>Class Duration: {item.duration}</p>
                <p>Registered Participants: {item.registered}</p> */}
              </div>
              <div className="text-box">
                
                <a  href={`/user/class/${item.id}`}  class="btn btn-white btn-animate" >
                  details
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ClientClasses;


