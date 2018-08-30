import React, { PureComponent } from "react";
import "./App.css";
import clover from "./images/clover.png";
import scooter from "./images/scooter.svg";

class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <img src={clover} alt="clover" className="clover" />
        <span className="company-name">Clover Company</span>
        <span className="cooming-soon">Future is coming...</span>
        <img src={scooter} alt="scooter" className="scooter" />
      </div>
    );
  }
}

export default App;
