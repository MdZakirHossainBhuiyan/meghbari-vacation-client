import React from 'react';
import { Link } from 'react-router-dom';
import './BookingTourInfo.css';

const BookingTourInfo = () => {
    return (
        <section className="booking-tour-info">
            <h1>Greece and Turkey adventure</h1>
            <p><small>14 days | 2 Countries | 12 Cities</small></p>
            <p className="entry-fee">Entry Fee: <span>5,00,000 Taka</span></p>
            <p className="details-info">Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores.</p>

            <Link to="/booking/inquiry"><button>SEND INQUIRY</button></Link>
        </section>
    );
};

export default BookingTourInfo;