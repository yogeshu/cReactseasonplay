import React, { Component } from "react";

const seasonConfig = {
 summer: {
     text : "lets hit the beach",
     iconName: 'sun'
 },
 winter: {
     text: "Brr! its chiilly",
     iconName:  "snowflake"
 }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat < 0 ? "winter" : "summer";
  }
};
const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text , iconName} = seasonConfig[season]
 return( <div> 

     <i className={  `${iconName} icon` } />
    <p> {text} </p>
      <i className= { `${iconName} icon ` }/>
        </div>  
  )
};

export default SeasonDisplay;
