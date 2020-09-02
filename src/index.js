import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';


class App extends React.Component{

    state = {lat: null, errorMessage: '', time: new Date().toLocaleTimeString()};
  

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position)=> {
        this.setState({lat: position.coords.latitude});
      },
      (err)=> {
        console.log(err);
        this.setState({errorMessage: err.message});
      }
    );

    setInterval(()=>{
      this.setState({time: new Date().toLocaleTimeString()})
    },1000)
  } 

  // componentDidUpdate(){
  //   console.log("re rendered");
  // }

  renderContent(){
    if(this.state.errorMessage&& !this.state.errorMessage.lat){
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return (
        <SeasonDisplay lat={this.state.lat} currentTime = {this.state.time}/>
      );
    }
    return (
      <div>
        <div className="ui active dimmer">
            <div className="ui massive text loader">Waiting for location request</div>
        </div>
      </div>
    );
  }

  render(){
    return(
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);