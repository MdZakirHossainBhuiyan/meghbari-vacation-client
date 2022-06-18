import React, { useEffect } from 'react';
import FeaturedTour from '../FeatureTour/FeaturedTour';
import './FeaturedTours.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';

const FeaturedTours = (props) => {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/featuredTours')
        .then(response => response.json())
        .then(data => setTours(data))
    }, [])

    return (
        <section className="featured-tours-content">
            {
                (props.isHome!='No') && <div>
                    <h2>Featured Tours</h2>
                    <p className='service-iconStyle'>-- <FontAwesomeIcon icon={faCarSide} /> --</p>
                </div>
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