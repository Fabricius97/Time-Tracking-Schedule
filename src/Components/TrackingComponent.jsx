import React from "react";
import threeDots from "../../images/icon-ellipsis.svg";
import "./TrackingComponent.css";

const TrackingComponent = ({ title, hours, previousHour, previousText }) => {
  return (
    <div className="trackingContainer">
      <div className="title">
        <div className="cardTitle">{title}</div>
        <button className="threeDotsButton">
          <img src={threeDots} alt="" />
        </button>
      </div>
      <div className="hourContent">
        <h1>{hours}hrs</h1>
        <span>
          Last {previousText} - {previousHour} hrs
        </span>
      </div>
    </div>
  );
};

export default TrackingComponent;
