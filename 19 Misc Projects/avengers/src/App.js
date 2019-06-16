import React from 'react';
import ReactDOM from 'react';
import {Route, Link} from 'react-router-dom';
import Home from './components/Home';
import AvengersList from './components/AvengersList';
import AvengersData from './avengersData';
import AvengerPage from './components/AvengerPage';
import './App.css'

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
      <div className="app-container">
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/avengers">Avengers</Link>
          </li>
        </ul>
        <Route exact path="/" component={Home}/>
        <Route path="/avengers/:id" component={AvengerPage} />

        <Route exact path="/avengers" component={AvengersList}/>

      </div>
     
    )
  }

}


export default App;