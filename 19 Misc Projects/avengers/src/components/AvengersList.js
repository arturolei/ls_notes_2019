import React from 'react';
import avengers from '../avengersData'
import AvengersCard from './AvengersCard';
import {Link} from 'react-router-dom';

class AvengersList extends React.Component{
    constructor(){
        super()
        this.state={
            avengersProfiles:[]
        }
    }
    componentDidMount(){
        this.setState({avengersProfiles:avengers})
    }
    render(){
        return (
          <div className="characters-list-wrapper">
             {this.state.avengersProfiles.map(avenger => <AvengersCard key ={avenger.id} avenger={avenger}/>)}
          </div>  
        );
    }
}

export default AvengersList;