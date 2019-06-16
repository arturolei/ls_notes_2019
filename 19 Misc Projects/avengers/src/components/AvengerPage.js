import React from 'react';
import avengers from '../avengersData';
import AvengersCard from './AvengersCard';


export default class AvengerPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            avenger: []
        }
    }
    componentDidMount(){
        const avengerProfile = avengers.find(avenger => this.props.match.params.id === `${avenger.id}`);
        this.setState({avenger: avengerProfile});
    }
    render(){
        return (<AvengersCard avenger={this.state.avenger}/>)
    }
}