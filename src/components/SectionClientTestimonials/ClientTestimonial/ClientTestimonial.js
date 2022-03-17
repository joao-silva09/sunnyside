import React from 'react';

import './ClientTestimonial.css'

const ClientTestimonial = props => {
    return (
        <div className="testimonial">
            <div className="flex_profile_pic">
                <div id="profile_pic" style={{
                    backgroundImage: `url(${props.profilePic})`
                }} />
            </div>
            <p className="testimonial_comment">{props.comment}</p>
            <div className="personal_dates">
                <h5 className="profile_name">{props.profileName}</h5>
                <p className="profile_charge">{props.charge}</p>
            </div>
        </div>
    )
}

export default ClientTestimonial;