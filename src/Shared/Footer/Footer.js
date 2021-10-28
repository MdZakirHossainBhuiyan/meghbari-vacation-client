import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-contain">
            <div className="copy-right">
                <p><FontAwesomeIcon icon={faCopyright} /><small> Copyright {(new Date()).getFullYear()} meghbarivacation.com</small></p>
            </div>
            <div className="rules-regulation">
                <div className="rr-info">
                    <p><small>Privacy policy</small></p>
                </div>
                <div className="rr-info">
                    <p><small>Terms & conditions</small></p>
                </div>
                <div className="rr-info">
                    <p><small>Cookies</small></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;