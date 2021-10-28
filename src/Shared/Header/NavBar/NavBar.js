import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className="navbar-container">
            <div className="nav-item">
                <a href="/home">Home</a>
            </div>
            <div className="nav-item">
                <a href="/tours">tours</a>
            </div>
            <div className="nav-item">
                <a href="/destinations">destinations</a>
            </div>
            <div className="nav-item">
                <a href="/about">about us</a>
            </div>
            <div className="nav-item">
                <a href="/ourService">services</a>
            </div>
        </div>
    );
};

export default NavBar;