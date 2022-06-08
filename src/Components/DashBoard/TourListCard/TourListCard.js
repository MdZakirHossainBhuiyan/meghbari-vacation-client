import React from 'react';
import { Link } from 'react-router-dom';
import './TourListCard.css';

const TourListCard = ({tour}) => {
    const tourId = tour._id;

    return (
        <div className='tourList-card'>
            <div className='tourList-cardImg'>
                <img src={`data:image/png;base64,${tour.image.img}`} alt="" />
            </div>
            <div className='tourList-cardContent'>
                <h4>{tour.title}</h4>
                <p>{tour.shortDescription}</p>

                <div className='tourList-cardButton'>
                    <Link to={"/booking/"+tourId}><button>Details</button></Link>
                    <Link to={"/delete/"+tourId}><button>Delete</button></Link>
                </div>
            </div>
        </div>
    );
};

export default TourListCard;