import React from 'react';
import './BookingTourOverview.css';

const BookingTourOverview = ({selectedTour}) => {
    return (
        <section className="booking-tour-overview">
            <h1>Overview</h1>
            <p>{selectedTour.overview}</p>
        </section>
    );
};

export default BookingTourOverview;