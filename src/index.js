import React , { Component } from 'react';
import ReactDOM from 'react-dom';



class App extends Component {
    constructor(){
        super(props)
        this.state = { lat : null }
    }

    render() { 
        window.navigator.geolocation.getCurrentPosition(
            (position) =>  console.log(position),
            (err) => console.log(err)
        )
        return (
            <div> 
                Latitude
            </div>
          );
    }
}
 
export default App;

ReactDOM.render(<App/>, document.querySelector('#root'))