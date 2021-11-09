import React from 'react';
import './PopularDestination.css';

const PopularDestination = () => {
    return (
        <section className="popular-destination-contain">
            <h1>Popular Destinations</h1>
            <div className="container popular-destination-info">
                <div class="img-left">
                    <h5>Bandarban</h5>
                    <p>20 Tours</p>
                </div>
                <div class="img-right">
                    <div className="right-top-left">
                        <h5>India</h5>
                        <p>3 Tours</p>
                    </div>
                    <div className="right-top-right">
                        <h5>Europe</h5>
                        <p>11 Tours</p>
                    </div>
                    <div className="right-bottom-left">
                        <h5>Sylhet</h5>
                        <p>7 Tours</p>
                    </div>
                    <div className="right-bottom-right">
                        <h5>Cox's Bazar</h5>
                        <p>9 Tours</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularDestination;