import React from 'react';

import './Footer.css'

const Footer = props => {
    return (
        <footer id="footer">
            <h3 id="footer_logo">{props.logo}</h3>
            <div className="footer_links">
                <ul className="links">
                    <li className="footer_links_items"><a href="/">About</a></li>
                    <li className="footer_links_items"><a href="/">Services</a></li>
                    <li className="footer_links_items"><a href="/">Projects</a></li>
                </ul>
            </div>
            <div className="footer_networks">
                <ul className="networks">
                    <li className="footer_network_item"><a href="/">{props.icon1}</a></li>
                    <li className="footer_network_item"><a href="/">{props.icon2}</a></li>
                    <li className="footer_network_item"><a href="/">{props.icon3}</a></li>
                    <li className="footer_network_item"><a href="/">{props.icon4}</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;