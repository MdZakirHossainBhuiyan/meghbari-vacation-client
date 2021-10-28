import React from 'react';
import './AboutUs.css';
import image from '../../images/pt1.jpg';

const AboutUs = () => {
    return (
        <section className="aboutUs-contain">
            <div className="container aboutUs-info">
                <h1>About Us</h1>
                <div className="aboutUs-details">
                    <div className="aboutUs-detail-info">
                        <h1>History</h1>
                        <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. <br /><br />In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div className="aboutUs-detail-info">
                        <h1>Mission</h1>
                        <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. <br /><br />In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div className="aboutUs-detail-info">
                        <h1>Vision</h1>
                        <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. <br /><br />In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                </div>
                <div className="aboutUs-img">
                    <img src={image} alt="" />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;