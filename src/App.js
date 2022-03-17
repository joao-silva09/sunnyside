import React from 'react';

import './App.css';

import InvertedSectionCards from './components/InvertedSectionCards/InvertedSectionCards';
import Navigation from "./components/Navigation/Navigation";
import SectionCard from "./components/SectionCard/SectionCard";
import DoubleSectionCards from './components/DoubleSectionCards/DoubleSectionCards'
import SectionClientTestimonials from './components/SectionClientTestimonials/SectionClientTestimonials'
import SectionGalery from './components/SectionGalery/SectionGalery';
import Footer from './components/Footer/Footer'

import Egg from './images/desktop/image-transform.jpg'
import Cup from './images/desktop/image-stand-out.jpg'
import Cherry from './images/desktop/image-graphic-design.jpg'
import Orange from './images/desktop/image-photography.jpg'
import GalleryMilk from './images/desktop/image-gallery-milkbottles.jpg';
import GalleryOrange from './images/desktop/image-gallery-orange.jpg';
import GalleryCone from './images/desktop/image-gallery-cone.jpg';
import GallerySugar from './images/desktop/image-gallery-sugarcubes.jpg';

import { FaPinterest, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'




function App() {
  return (
    <div className="App">
      <Navigation title="sunnyside" />
      <SectionCard
        image={Egg}
        title="Transform your brand"
        description="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you." backgroundColor="rgb(255, 166, 0, .2"
      />
      <InvertedSectionCards
        image={Cup}
        title="Stand out to the right audience"
        description="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places." backgroundColor="rgb(255, 0, 0, .2)"
      />
      <section id="double_section_cards">
        <DoubleSectionCards
          image={Cherry}
          title="Graphic Design"
          description="Great design makes you memorable. We deliver atwork that underscores your brand message and captures potential clients attention."
        />
        <DoubleSectionCards
          image={Orange}
          title="Photography"
          description="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
        />
      </section>
      <SectionClientTestimonials />
      <SectionGalery 
        image1={GalleryMilk} 
        image2={GalleryOrange} 
        image3={GalleryCone} 
        image4={GallerySugar} 
      />
      <Footer
        logo="sunnyside" 
        icon1={<FaFacebook color='rgb(0, 0, 0, .5)' size='1.6rem'/>} 
        icon2={ <FaInstagram color='rgb(0, 0, 0, .5)' size='1.6rem'/> } 
        icon3={<FaTwitter color='rgb(0, 0, 0, .5)' size='1.6rem'/>} 
        icon4={ <FaPinterest color='rgb(0, 0, 0, .5)' size='1.6rem'/> }
      />
    </div>
  );
}

export default App;
