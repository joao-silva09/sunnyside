import React from 'react';
import CardImage from '../SectionCard/CardImage/CardImage';
import CardText from '../SectionCard/CardText/CardText';

const InvertedSectionCards = props => {
    return (
        <section id="cards">
            <CardImage {...props}></CardImage>
            <CardText {...props}></CardText>
        </section>

    )
}

export default InvertedSectionCards;