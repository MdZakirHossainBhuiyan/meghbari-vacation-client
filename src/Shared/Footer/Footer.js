import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-contain">
            <div className="copy-right">
                <p><small> Copyright &copy; {(new Date()).getFullYear()} meghbarivacation.com</small></p>
            </div>
            <div className="rules-regulation">
                <div className="rr-info">
                    <p><small>Privacy policy</small></p>
                </div>
                <div className="rr-info">
                    <p><small>Terms &#38; conditions</small></p>
                </div>
                <div className="rr-info">
                    <p><small>Cookies</small></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;