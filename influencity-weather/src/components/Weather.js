import React, { Component } from 'react';

import data from '../data/data.json';
import logo from '../cloudsIcon.png';


class Weather extends Component {
  
  componentDidMount (){
    this.getTempInCelsius();
  }

  state = {
    data: data,
    temp: 0,

  }

  getTempInCelsius(){
    let tempKelvin= Math.round(this.state.data.list.main.temp-273.15)
    this.setState({temp: tempKelvin})
  }

  render (){
    console.log(this.state.data)
    
    return (
      <div className="card ml-2 col-2 bg-light border-dark">
        <div className="row no-gutters">
          <div className="card-body text-left ">
            <h5 className="card-title"> {this.state.data.list.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{this.state.data.list.sys.country}</h6>
            <p className="card-text">{this.state.temp} <span>ºC</span></p>
          </div>
          <div className="col-md">
            <img src={logo} className="imageW" alt="weather"></img>
          </div>
        </div>
    </div>
    )

  }
}

export default Weather;