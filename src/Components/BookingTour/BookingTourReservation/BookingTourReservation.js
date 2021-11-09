import React from 'react';
import { Link } from 'react-router-dom';
import './BookingTourReservation.css';

const BookingTourReservation = () => {
    return (
        <section className="booking-tour-reservation">
            <h1>Reservation</h1>
            <div className="reservation-info">
                <div className="reservation-div">
                    <p>Starting Date:</p>
                    <h3>5th Nov 2022</h3>
                </div>
                <div className="reservation-div">
                    <p>Ending Date</p>
                    <h3>15th Nov 2022</h3>
                </div>
                <div className="reservation-div">
                    <p>Remaining day</p>
                    <h3>08</h3>
                </div>
                <div className="reservation-div">
                    <p>Total Seat:</p>
                    <h3>45</h3>
                </div>
                <div className="reservation-div">
                    <p>Booked</p>
                    <h3>22</h3>
                </div>
                <div className="reservation-div">
                    <p>Available</p>
                    <h3>23</h3>
                </div>
                <div className="reservation-div">
                    <p>Male Attended:</p>
                    <h3>10</h3>
                </div>
                <div className="reservation-div">
                    <p>Female Attended:</p>
                    <h3>07</h3>
                </div>
                <div className="reservation-div">
                    <p>Children</p>
                    <h3>05</h3>
                </div>
            </div>
            <div className="booked-btn">
                <Link to="/bookingform"><button>Booked Your Seat</button></Link>
            </div>
        </section>
    );
};

export default BookingTourReservation;