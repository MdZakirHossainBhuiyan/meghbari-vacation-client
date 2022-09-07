import React from 'react';
import { Link } from 'react-router-dom';
import './PopularTour.css';

const PopularTour = ({popularTour}) => {
    const tourId = popularTour._id;

    return (
        <div className="popular-tour-content">
            <img src={`data:image/png;base64,${popularTour.image.img}`} alt="" />
            <h4>{popularTour.title}</h4>
            <div className="tour-area">
                <p>{popularTour.day} Days | {popularTour.country} Countries | {popularTour.city} Cities</p>
            </div>
            <p className="pt-description">{popularTour.shortDescription}</p>

            <Link to={"/booking/"+tourId}><button>Read More</button></Link>
        </div>
    );
};

export default PopularTour;