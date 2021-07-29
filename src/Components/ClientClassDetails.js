import React, { useState } from "react";
import dummyData from "../dummy-data/classes.js";

// ⛳️⛳️This Component should render each individual Class 

// breaks when you name argument 'class'
const ClientClassDetails = (props) => {
  const [classes] = useState(dummyData);
  


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
               <p>Date: {item.capacity}</p>
                <p>Class Time: {item.time}</p>
                <p>Class Duration: {item.duration}</p>
                <p>Registered Participants: {item.registered}</p>
              </div>
              
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ClientClassDetails;

