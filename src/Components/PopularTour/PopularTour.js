import React from 'react';
import './PopularTour.css';

const PopularTour = ({popularTour}) => {
    return (
        <div className="popular-tour-content">
            <img src={popularTour.img} alt="" />
            <h4>{popularTour.title}</h4>
            <div className="tour-area">
                <p>{popularTour.day} Days | {popularTour.country} Countries | {popularTour.city} Cities</p>
            </div>
            <p className="pt-description">{popularTour.description}</p>

            <button>BOOK NOW</button>
        </div>
    );
};

export default PopularTour;