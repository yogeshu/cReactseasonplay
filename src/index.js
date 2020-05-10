import React, { Component } from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from "./SeasonDisplay";
import Loader from './FLoader';
class App extends Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> error : {this.state.errorMessage} </div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div>
          {" "}
          <SeasonDisplay lat={this.state.lat} />{" "}
        </div>
      );
    }

    return <div> <Loader message="Please Accept the location Request Okay " /> </div>;
  }
}

export default App;

ReactDOM.render(<App />, document.querySelector("#root"));
