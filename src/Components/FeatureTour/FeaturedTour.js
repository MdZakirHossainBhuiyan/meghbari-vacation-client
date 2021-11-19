import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedTour.css';

const FeaturedTour = ({tour}) => {
    const tourId = tour._id;
    
    return (
        <div className="featuredTourItem-content">
            <div className="featuredTourItem-image">
                <img src={`data:image/png;base64,${tour.image.img}`} alt="" />
            </div>
            <div className="featuredTourItem-info">
                <h3>{tour.title}</h3>
                <p>{tour.shortDescription}</p>
                <Link to={"/booking/"+tourId}><button>BOOK NOW</button></Link>
            </div>
        </div>
    );
};

export default FeaturedTour;