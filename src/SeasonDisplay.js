import React, { Component } from "react";
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat < 0 ? "winter" : "summer";
  }
};
const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
 const fake =  season === 'winter' ? "Brr! its chilly" : "lets hit the beach" ;
 const icon = season === 'winter' ? 'snowflake'  : 'sun'
 return( <div> 

     <i className={  `${icon} icon` } />
    <p> {fake} </p>
      <i className= { `${icon} icon ` }/>
        </div>  
  )
};

export default SeasonDisplay;
