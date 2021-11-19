import React from 'react';
import './BookingTourCover.css';

const BookingTourCover = (props) => {
    console.log(props.selectedTour);
    return (
        <section className="booking-tour-cover">
            <img src={`data:image/png;base64,${props.selectedTour?.image?.img}`} alt="" />
            <h1>{props.selectedTour.title}</h1>
        </section>
    );
};

export default BookingTourCover;