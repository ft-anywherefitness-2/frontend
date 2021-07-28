import React, { useState } from "react";
import dummyData from "../dummy-data/classes.js";

// breaks when you name argument 'class'
const ClientClasses = () => {
  const [classes] = useState(dummyData);

  return (
    <div className="class-container">
      {classes.map((item) => {
        return (
          <div className="class instructor-class">
            <div className="class-content-container">
              <div className="class-header">
                <h5>{item.type}</h5>
                <h4>{item.capacity}</h4>
              </div>
              <div className="text-box">
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

export default GetClasses;
