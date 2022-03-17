import React from 'react';
import './Navigation.css';
import orange from '../../images/desktop/image-orange.png';

function Navigation (props) {
    return (
        <section id="header">
            <header className="main-header">
                <h1><a href="https://github.com/joao-silva09"  className="title">{props.title}</a></h1>
                <nav className="nav-header">
                    <ul className="nav-list">
                        <li><a href="https://github.com/joao-silva09" className="nav-item">About</a></li>
                        <li><a href="https://github.com/joao-silva09" className="nav-item">Services</a></li>
                        <li><a href="https://github.com/joao-silva09" className="nav-item">Projects</a></li>
                        <li><a href="https://github.com/joao-silva09" className="nav-item" id="contact">Contact</a></li>
                    </ul>
                </nav>
            </header>

            <img src={orange} alt="orange" id="banner" />
        </section>
    )
}

export default Navigation;