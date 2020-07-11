import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Sun from "./Sun";
import Star from "./Star";

class SwitchModeDay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Night",
      mode: "day",
      color: "yellow",
      counter: 0,
      picture: <Sun/>,
    };
  }

  switchMode = () => {
    this.setState((prevCount) => {
      if (this.state.name === "Night") {
        return {
          name: "Day",
          mode: "night",
          color: "black",
          counter: prevCount.counter + 1,
          picture: <Star />,
        };
      }
      return { name: "Night", mode: "day", color: "yellow", picture: <Sun /> };
    });
  };

  render() {
    const { mode, color, name, counter, picture } = this.state;
    return (
      <>
        <h1 className="mode">{mode}</h1>
        <div className="switcher">
          <Helmet bodyAttributes={{ style: `background-color : ${color}` }} />
          <button onClick={this.switchMode} className={mode} id="switcher">
            Switch to {name}
          </button>
        </div>
        <div>{picture}</div>
        <div className="counterDays">
          <h2 className={mode}>{counter} days passed</h2>
        </div>
      </>
    );
  }
}

export default SwitchModeDay;
