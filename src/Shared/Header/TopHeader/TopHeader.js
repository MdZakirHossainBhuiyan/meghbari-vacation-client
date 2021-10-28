import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcaseRolling, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './TopHeader.css';
import {Link} from "react-router-dom";

const TopHeader = () => {
    return (
        <div className="topHeader">
            <div className="container th-container">
                <div className="Heading">
                    <FontAwesomeIcon className="fa-3x icons-design" icon={faSuitcaseRolling} />
                    <p>book your <br />travel</p>
                    <h3>Meghbari</h3>
                </div>
                <div className="contact">
                    <div className="call-us-icon">
                        <FontAwesomeIcon icon={faPhoneAlt} />
                    </div>
                    <div className="call-us-info">
                        <p><small>Call Us: <br /> +880 1675-026895</small></p>
                    </div>
                    <div className="log-btn">
                        <Link to="/login"><button>Login</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;