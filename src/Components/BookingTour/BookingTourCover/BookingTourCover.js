import React from 'react';
import './BookingTourCover.css';
import coverImage from '../../../images/pt1.jpg';

const BookingTourCover = () => {
    return (
        <section className="booking-tour-cover">
            <img src={coverImage} alt="" />
            <h1>Greece and Turkey adventure</h1>
        </section>
    );
};

export default BookingTourCover;