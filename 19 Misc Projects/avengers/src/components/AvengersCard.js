import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom'

const AvengersCard = props => {
    return(
        <div className="character-card">
            <Link to={`/avengers/${props.avenger.id}`}>
                <h3>{props.avenger.name}</h3>
            </Link>
            <p>{props.avenger.description}</p>
        </div>
    )
}


export default AvengersCard;