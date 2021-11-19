import React, { useEffect } from 'react';
import './PopularTours.css';
import PopularTour from '../PopularTour/PopularTour';
import { useState } from 'react';

const PopularTours = () => {
    const [pTours, setPTours] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/popularTours")
        .then(response => response.json())
        .then(data => setPTours(data))
    }, [])

    return (
        <section className="popular-tours-container">
            <div className="popular-tour-header">
                <div className="popular-tour-header-info">
                    <h1>Popular Tour Packages</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, sunt ipsa reiciendis repellat fugiat exercitationem?</p>
                </div>
                <div className="popular-tour-header-link">
                    <a href="/view">/ View All Tours</a>
                </div>
            </div>
            <div className="container popular-tours-items">
                {
                    pTours.map(popularTour => <PopularTour popularTour={popularTour} />)
                }
            </div>
        </section>
    );
};

export default PopularTours;