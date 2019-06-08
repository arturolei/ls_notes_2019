import React from 'react';
import ReactDOM from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router} from 'react-router-dom';
import AvengersData from './avengersData';

import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state ={
      avengersData:AvengersData
    }
  }
  render(){
    return(
      <Router>
        <div>HIIIIII, It's working</div>
      </Router>
    )
  }

}


export default App;