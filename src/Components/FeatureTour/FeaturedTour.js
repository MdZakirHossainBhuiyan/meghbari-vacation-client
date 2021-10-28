import React from 'react';
import './FeaturedTour.css';

const FeaturedTour = ({tour}) => {
    return (
        <div className="featuredTourItem-content">
            <div className="featuredTourItem-image">
                <img src={tour.img} alt="" />
            </div>
            <div className="featuredTourItem-info">
                <h3>{tour.title}</h3>
                <p>{tour.description}</p>
                <button>BOOK NOW</button>
            </div>
        </div>
    );
};

export default FeaturedTour;