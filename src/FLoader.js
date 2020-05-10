import React, { Component } from 'react';

const Loader = (props) => {
    return  (
    <div className="ui active dimmer">
<div className="ui text big loader"> { props.message} </div>

    </div>                )
  }

 Loader.defaultProps = {
   message : "Loading..."
 }

export default Loader;