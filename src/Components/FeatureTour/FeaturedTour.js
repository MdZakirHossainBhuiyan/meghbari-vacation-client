import React from 'react';
import { useHistory } from 'react-router';
import './FeaturedTour.css';

const FeaturedTour = ({tour}) => {
    const history = useHistory();

    const handleClick = tourId => {
        const uri = `/booking/${tourId}`;
        history.push(uri);
    }
    
    return (
        <div className="featuredTourItem-content">
            <div className="featuredTourItem-image">
                <img src={`data:image/png;base64,${tour.image.img}`} alt="" />
            </div>
            <div className="featuredTourItem-info">
                <h3>{tour.title}</h3>
                <p>{tour.shortDescription}</p>
                <button onClick={() => handleClick(tour._id)}>BOOK NOW</button>
            </div>
        </div>
    );
};

export default FeaturedTour;