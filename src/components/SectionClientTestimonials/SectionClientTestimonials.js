import React from 'react';

import './SectionClientTestimonials.css'

import ClientTestimonial from './ClientTestimonial/ClientTestimonial';

import Pic1 from '../../images/image-emily.jpg';
import Pic2 from '../../images/image-thomas.jpg';
import Pic3 from '../../images/image-jennie.jpg';

const SectionClientTestimonials = props => {
    return (
        <section id="client_testimonials">
            <h4 className="title">CLIENT TESTIMONIALS</h4>
            <div className="testimonial_box">
                <ClientTestimonial profilePic={Pic1} alt="Profile 1" comment="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadllines were always hit" profileName="Emily R." charge="Marketing Director" />
                <ClientTestimonial profilePic={Pic2} alt="Profile 2" comment="Sunnyside's enthusiasm coupled with their keen interest in our brand´s success made it a satisfying and enjoyable experience" profileName="Thomas S." charge="Chief Operating Officer" />
                <ClientTestimonial profilePic={Pic3} alt="Profile 3" comment="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!" profileName="Jennie F." charge="Business Owner" />
            </div>
        </section>
    )
}

export default SectionClientTestimonials;