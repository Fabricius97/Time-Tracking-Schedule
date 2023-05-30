import React from "react";
import eillipsis from "../../images/icon-ellipsis.svg";
import "./TimeFrameCardComponent.css";

const TimeFrameCardComponent = ({
  title,
  hours,
  previousHour,
  previousText,
}) => {
  return (
    <div className="trackingContainer">
      <div className="title">
        <div className="cardTitle">{title}</div>
        <button className="eillipsisButton">
          <img src={eillipsis} alt="" />
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

export default TimeFrameCardComponent;
