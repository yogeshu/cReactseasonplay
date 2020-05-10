import React, { Component } from "react";
import "./App.css";
const seasonConfig = {
  summer: {
    text: "lets hit the beach",
    iconName: "sun"
  },
  winter: {
    text: "Brr! its chiilly",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat < 0 ? "winter" : "summer";
  }
};
const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  return (
    <div className= {  ` display-season ${season}` }>
      <i className={` icon-left massive ${iconName} icon`} />
      <p> {text} </p>
      <i className={` icon-right massive  ${iconName} icon `} />
    </div>
  );
};

export default SeasonDisplay;
