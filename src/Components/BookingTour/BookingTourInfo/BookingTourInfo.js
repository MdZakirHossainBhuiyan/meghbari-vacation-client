import React from 'react';
import { Link } from 'react-router-dom';
import './BookingTourInfo.css';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BookingTourInfo = ({selectedTour}) => {
    const {title, day, night, country, city, place, shortDescription, entryFee, ageLimitation, tourCategory, tourType, activityLevel, serviceType} = selectedTour;

    return (
        <section className="booking-tour-info">
            <div className="booking-tour-info-content">
                <p><small><FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp;&nbsp; {tourCategory}</small></p>
                <h1>{title}</h1>
                <p><small>{day} days | {country} Countries | {city} Cities <br /> {night} nights | {place} places</small></p>
                <p><small>{tourType} | {activityLevel} | {serviceType}</small></p>
                <p className="entry-fee">Entry Fee: <span>{entryFee}/= Taka</span></p>
                <p className="age-limitation">Age Limit: <span>{ageLimitation}</span></p>
                <p className="details-info">{shortDescription}</p>

                <Link to="/booking/inquiry"><button>SEND INQUIRY</button></Link>
            </div>
        </section>
    );
};

export default BookingTourInfo;