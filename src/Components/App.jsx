import React, { useState } from "react";
import "./App.css";
import UserComponent from "./UserComponent";
import TimeTrackingComponent from "./TimeTrackingComponent";
import data from "../../data.json";

function App() {
  const [selectedButton, setSelectedButton] = useState("daily");

  const handleClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const titles = data.map((item) => item.title);
  const currentHours = data.map(
    (item) => item.timeframes[selectedButton].current
  );
  const previousHours = data.map(
    (item) => item.timeframes[selectedButton].previous
  );

  return (
    <div className="App">
      <div className="container">
        <UserComponent
          selectedButton={selectedButton}
          handleClick={handleClick}
        />
        <TimeTrackingComponent
          titles={titles}
          currentHours={currentHours}
          previousHours={previousHours}
          selectedButton={selectedButton}
        />
      </div>
    </div>
  );
}

export default App;
