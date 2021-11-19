import React from 'react';
import './BookingTourIncludingInfo.css';
import { faUtensils, faBusAlt, faHotel, faSnowboarding, faHandsHelping, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BookingTourIncludingInfo = ({selectedTour}) => {
    return (
        <section className="booking-tour-including">
            <h1>What's included</h1>
            <div className="including-items-info">
                <div className="including-items">
                    <h6><FontAwesomeIcon className="including-icon" icon={faUtensils} /><span>Meals</span></h6>
                    <p>{selectedTour.breakfast} breakfast, {selectedTour.lunch} lunch, {selectedTour.dinner} dinner</p>
                </div>
                <div className="including-items">
                    <h6><FontAwesomeIcon className="including-icon" icon={faHotel} /><span>Accommodation</span></h6>
                    <p>{selectedTour.accommodation}</p>
                </div>
                <div className="including-items">
                    <h6><FontAwesomeIcon className="including-icon" icon={faBusAlt} /><span>Transportation</span></h6>
                    <p>{selectedTour.transportation}</p>
                </div>
                <div className="including-items">
                    <h6><FontAwesomeIcon className="including-icon" icon={faSnowboarding} /><span>Activities</span></h6>
                    <p>{selectedTour.activities}</p>
                </div>
                <div className="including-items">
                    <h6><FontAwesomeIcon className="including-icon" icon={faHandsHelping} /><span>Staff & experts</span></h6>
                    <p>{selectedTour.staff}</p>
                </div>
            </div>

            <h1>What's not included</h1>
            <div className="not-Including-info">
                <h6><FontAwesomeIcon icon={faTimesCircle} /><span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt laborum, minima dolorum minus esse rem quasi soluta enim dignissimos fugit.</span></h6> 
            </div>
        </section>
    );
};

export default BookingTourIncludingInfo;