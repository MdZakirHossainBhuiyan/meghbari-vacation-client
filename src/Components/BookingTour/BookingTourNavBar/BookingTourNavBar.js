import React from 'react';
import './BookingTourNavBar.css';

const BookingTourNavBar = () => {
    return (
        <section className="booking-tour-navbar">
            <div className="booking-tour-contents">
                <button>Overview</button>
                <button>Itinerary</button>
                <button>What's Include</button>
                <button>Reservation</button>
            </div>
        </section>
    );
};

export default BookingTourNavBar;