import React from 'react';
import CardText from './CardText/CardText'
import CardImage from './CardImage/CardImage'
import './SectionCard.css'

const Section_card = props => {
    return (
        <section id="cards">
            <CardText {...props}></CardText>
            <CardImage {...props}></CardImage>
        </section>
    )
}

export default Section_card;