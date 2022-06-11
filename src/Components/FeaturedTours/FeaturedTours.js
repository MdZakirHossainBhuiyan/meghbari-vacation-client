import React, { useEffect } from 'react';
import FeaturedTour from '../FeatureTour/FeaturedTour';
import './FeaturedTours.css';
import { useState } from 'react';

const FeaturedTours = (props) => {
    const [tours, setTours] = useState([]);

    console.log('feature tour', props.isHome);

    useEffect(() => {
        fetch('http://localhost:5000/featuredTours')
        .then(response => response.json())
        .then(data => setTours(data))
    }, [])

    return (
        <section className="featured-tours-content">
            {
                (props.isHome!='No') && <h2>Featured Tours</h2>
            }
            <div className="container featured-tours-items">
                {
                    tours.map(tour => <FeaturedTour tour={tour} />)
                }
            </div>
        </section>
    );
};

export default FeaturedTours;