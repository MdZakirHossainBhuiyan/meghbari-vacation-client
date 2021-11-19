import React, { useEffect } from 'react';
import FeaturedTour from '../FeatureTour/FeaturedTour';
import './FeaturedTours.css';
import { useState } from 'react';

const FeaturedTours = () => {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/featuredTours')
        .then(response => response.json())
        .then(data => setTours(data))
    }, [])

    return (
        <section className="featured-tours-content">
            <h2>Featured Tours</h2>
            <div className="container featured-tours-items">
                {
                    tours.map(tour => <FeaturedTour tour={tour} />)
                }
            </div>
        </section>
    );
};

export default FeaturedTours;