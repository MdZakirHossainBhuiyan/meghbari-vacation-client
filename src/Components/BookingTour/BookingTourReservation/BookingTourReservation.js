import React from 'react';
import { Link } from 'react-router-dom';
import './BookingTourReservation.css';

const BookingTourReservation = ({selectedTour}) => {
    let {seat} = selectedTour;
    const selectedTourId = selectedTour._id;

    const startingDate = selectedTour.startDate;
    const startingDay = +(startingDate[startingDate.length-2]+startingDate[startingDate.length-1]);
    const today = (new Date()).getDate();
    let remainingDay = startingDay - today;
    if(remainingDay <= 0){
        remainingDay = "00";
        seat = "00";
    }
    

    return (
        <section className="booking-tour-reservation">
            <h1>Reservation</h1>
            <div className="reservation-info">
                <div className="reservation-div">
                    <p>Starting Date:</p>
                    <h3>{selectedTour.startDate}</h3>
                </div>
                <div className="reservation-div">
                    <p>Ending Date</p>
                    <h3>{selectedTour.endDate}</h3>
                </div>
                <div className="reservation-div">
                    <p>Remaining day</p>
                    <h3>{remainingDay}</h3>
                </div>
                <div className="reservation-div">
                    <p>Total Seat:</p>
                    <h3>{seat}</h3>
                </div>
                <div className="reservation-div">
                    <p>Booked</p>
                    <h3>00</h3>
                </div>
                <div className="reservation-div">
                    <p>Available</p>
                    <h3>{seat}</h3>
                </div>
                <div className="reservation-div">
                    <p>Male Attended:</p>
                    <h3>00</h3>
                </div>
                <div className="reservation-div">
                    <p>Female Attended:</p>
                    <h3>00</h3>
                </div>
                <div className="reservation-div">
                    <p>Children</p>
                    <h3>00</h3>
                </div>
            </div>
            <div className="booked-btn">
                {
                    (remainingDay>0)?<Link to={"/bookingform/"+selectedTourId}><button>Book Your Seat</button></Link>:<button>Booking Closed</button>
                }
            </div>
        </section>
    );
};

export default BookingTourReservation;