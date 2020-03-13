import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';


const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/home">Home</a>
                <a href="/profile">Profile Info</a>
                <a href="about">About</a>
            </nav>
        </div>
    );
};

export default Header;