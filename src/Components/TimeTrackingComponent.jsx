import React from "react";
import TimeFrameCardComponent from "./TimeFrameCardComponent";
import "./TimeTrackingComponent.css";
import work from "./../../images/icon-work.svg";
import play from "./../../images/icon-play.svg";
import study from "./../../images/icon-study.svg";
import exercise from "./../../images/icon-exercise.svg";
import social from "./../../images/icon-social.svg";
import selfCare from "./../../images/icon-self-care.svg";

const TimeTrackingComponent = ({
  titles,
  currentHours,
  previousHours,
  selectedButton,
}) => {
  const previousText = {
    daily: "Day",
    weekly: "Week",
    monthly: "Month",
  };

  const data = titles.map((title, index) => {
    const currentHour = currentHours[index];
    const previousHour = previousHours[index];

    const backgroundAndImageForEachCard = {
      Work: { background: "hsl(15, 100%, 70%)", image: work },
      Play: { background: "hsl(195, 74%, 62%)", image: play },
      Study: { background: "hsl(348, 100%, 68%)", image: study },
      Exercise: { background: "hsl(145, 58%, 55%)", image: exercise },
      Social: { background: "hsl(264, 64%, 52%)", image: social },
      "Self Care": { background: "hsl(43, 84%, 65%)", image: selfCare },
    };

    const { background, image } = backgroundAndImageForEachCard[title];

    return {
      title,
      background,
      image,
      hours: currentHour,
      previousHours: previousHour,
    };
  });

  return (
    <div className="timeTrackingComponent">
      {data.map((data) => (
        <div
          key={data.title}
          className={`${data.title.toLowerCase()} cardContainer`}
          style={{ backgroundColor: data.background }}
        >
          <img src={data.image} alt="" className="cardImg" />
          <TimeFrameCardComponent
            title={data.title}
            hours={data.hours}
            previousHour={data.previousHours}
            previousText={previousText[selectedButton]}
          />
        </div>
      ))}
    </div>
  );
};

export default TimeTrackingComponent;
