import React, { useState } from "react";
import dummyData from "../dummy-data/classes.js";

// breaks when you name argument 'class'
const InstructorClasses = () => {
  const [classes] = useState(dummyData);

  return (
    <div className="instructor-class-container">
      {classes.map((item) => {
        return (
          <div className="instructor-class">
            <div className="instructor-class-content-container">
              <div className="instructor-class-header">
                <h5>{item.type}</h5>
                <h4>{item.capacity}</h4>
              </div>
              <div className="instructor-text-box">
                <a href="#" class="btn btn-white btn-animate">
                  click me
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InstructorClasses;
