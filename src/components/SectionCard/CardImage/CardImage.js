import React from 'react';
import './CardImage.css';

const CardImage = props => {
    return (
        <div>
            <img className="card_image" src={props.image} alt={props.alt}></img>
        </div>
    )
}

export default CardImage;