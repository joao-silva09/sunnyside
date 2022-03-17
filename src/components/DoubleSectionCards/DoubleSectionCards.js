import React from 'react';
import './DoubleSectionCards.css'

const DoubleSectionCards = props => {
    return (
        <div className="double_card" style={{
            backgroundImage: `url(${props.image})`
        }}>
            <h3 className="title">{props.title}</h3>
            <p className="description">{props.description}</p>
        </div>
    )
}

export default DoubleSectionCards; 