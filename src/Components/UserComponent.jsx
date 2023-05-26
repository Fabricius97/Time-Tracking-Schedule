import React from "react";
import "./UserComponent.css";
import UserImage from "../../images/image-jeremy.png";
import { useState } from "react";

const UserComponent = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleClick = (buttonId) => {
    setSelectedButton(buttonId);
  };
  return (
    <div className="userComponent">
      <div className="userContainer">
        <div className="userContent">
          <img src={UserImage} alt="UserImage" className="userImage" />
          <div className="userText">
            <span style={{ color: "rgb(190, 190, 190)" }}>Report for</span>
            <h1 style={{ fontWeight: "lighter" }}>Jeremy Robson</h1>
          </div>
        </div>
      </div>
      <div className="dailyWeeklyMonthly">
        <button
          className={`daily ${
            selectedButton === "daily" ? "button-selected" : ""
          }`}
          onClick={() => handleClick("daily")}
        >
          Daily
        </button>
        <button
          className={`weekly ${
            selectedButton === "weekly" ? "button-selected" : ""
          }`}
          onClick={() => handleClick("weekly")}
        >
          Weekly
        </button>
        <button
          className={`monthly ${
            selectedButton === "monthly" ? "button-selected" : ""
          }`}
          onClick={() => handleClick("monthly")}
        >
          Monthly
        </button>
      </div>
    </div>
  );
};

export default UserComponent;
