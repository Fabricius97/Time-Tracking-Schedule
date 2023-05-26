import React from "react";
import "./timeTrackingComponent.css";

const TimeTrackingComponent = ({ backgroundColor, backgroundImg }) => {
  return (
    <div className="timeTrackingComponent">
      <div className="workCardContainer">
        <div className="workCard" style={{ backgroundColor }}>
          <img src={backgroundImg} alt="" className="workImg" />
        </div>
      </div>
    </div>
  );
};

export default TimeTrackingComponent;
