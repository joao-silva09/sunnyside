import React from 'react';
import './CardText.css'

const CardText = props => {
    return (
        <div className="card_text">
            <h2 className="card_title">{props.title}</h2>
            <p className="card_description">{props.description}</p>
            <a href="https://github.com/" className="card_link">LEARN MORE<div className="card_link_span" style={{
                backgroundColor: props.backgroundColor
            }}></div></a>
        </div>
    )
}

export default CardText;