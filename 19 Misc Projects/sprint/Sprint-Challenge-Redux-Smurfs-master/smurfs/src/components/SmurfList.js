import React from 'react';
import Smurf from './Smurf';
import './SmurfComponents.css';

const SmurfList = props => {
    return (
        <div className="smurf-list-container">
            <h2>SMURFS IN THE VILLAGE:</h2>
            {props.smurfs.map((smurf,index) => <Smurf key={index} smurf={smurf}/>)}
        </div>
    )
}

export default SmurfList;