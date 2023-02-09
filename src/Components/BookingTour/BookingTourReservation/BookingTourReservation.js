import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './BookingTourReservation.css';

const BookingTourReservation = ({selectedTour}) => {
    const [bookedInfo, setBookedInfo] = useState('');

    let {seat} = selectedTour;
    const selectedTourId = selectedTour._id;

    useEffect(() => {
        fetch('https://meghbari-vacation-server.vercel.app/tourInfo/'+ selectedTourId)
        .then(res => res.json())
        .then(data => setBookedInfo(data))
    }, [selectedTourId])

    const startingDate = selectedTour.startDate;

    const presentDate = Math.abs((new Date().getTime() / 1000).toFixed(0));
    const futureDate = Math.abs((new Date(startingDate).getTime() / 1000).toFixed(0));
    let remainingDay = Math.floor((futureDate - presentDate)/86400);

    let totalMember=0;
    let totalMale = 0;
    let totalFemale = 0;
    let totalChild = 0;

    if(bookedInfo){
        bookedInfo.forEach(item => {
            totalMember+=parseInt(item.totalMember);
            totalMale+=parseInt(item.maleMember);
            totalFemale+=parseInt(item.femaleMember);
            totalChild+=parseInt(item.childrenMember);
        })
    }

    let availableSeat = seat - totalMember;

    if(remainingDay <= 0){
        remainingDay = "00";
        seat = "00";
        totalMember = "00";
        totalMale = "00";
        totalFemale = "00";
        totalChild = "00";
        availableSeat = "00";
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
                    <h3>{totalMember}</h3>
                </div>
                <div className="reservation-div">
                    <p>Available</p>
                    <h3>{availableSeat}</h3>
                </div>
                <div className="reservation-div">
                    <p>Male Attended:</p>
                    <h3>{totalMale}</h3>
                </div>
                <div className="reservation-div">
                    <p>Female Attended:</p>
                    <h3>{totalFemale}</h3>
                </div>
                <div className="reservation-div">
                    <p>Children</p>
                    <h3>{totalChild}</h3>
                </div>
            </div>
            <div className="booked-btn">
                {
                    (remainingDay>0 || availableSeat>0)?<Link to={"/bookingform/"+selectedTourId}><button>Book Your Seat</button></Link>:<button>Booking Closed</button>
                }
            </div>
        </section>
    );
};

export default BookingTourReservation;