import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './NavBar.css';

const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="navbar-container">
            <div className="nav-item">
                <Link to="/home">Home</Link>
            </div>
            <div className="nav-item">
                <Link to="/tours">tours</Link>
            </div>
            <div className="nav-item">
                <Link to="/destinations">destinations</Link>
            </div>
            <div className="nav-item">
                <Link to="/about">about us</Link>
            </div>
            <div className="nav-item">
                <Link to="/ourService">services</Link>
            </div>
            {
                loggedInUser.email ? <div className="nav-item">
                    <Link to="/dashboard">Dashboard</Link>
                </div> : <div></div>
            }
        </div>
    );
};

export default NavBar;