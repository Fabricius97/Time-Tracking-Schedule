import "./App.css";
import UserComponent from "./Components/UserComponent";
import TimeTrackingComponent from "./Components/TimeTrackingComponent";
import CardBackground from "./../cardBackground.json";

function App() {
  return (
    <div className="App">
      <div className="container">
        <UserComponent />
        <div className="timeTrackingComponent">
          {CardBackground.map((item, index) => (
            <TimeTrackingComponent
              key={index}
              backgroundColor={item.backgroundColor}
              backgroundImg={item.backgroundImg}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
