import React from 'react';
import './SectionGalery.css'

const SectionGalery = props => {
    return (
        <section id="section_galery">
            <img src={props.image1} alt="imagem 1" />
            <img src={props.image2} alt="imagem 2" />
            <img src={props.image3} alt="imagem 3" />
            <img src={props.image4} alt="imagem 4" />
        </section>
    )
}

export default SectionGalery;