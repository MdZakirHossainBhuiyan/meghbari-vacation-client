import React from 'react';
import { useState } from 'react';
import BookingTourIncludingInfo from '../BookingTourIncludingInfo/BookingTourIncludingInfo';
import BookingTourItinerary from '../BookingTourItinerary/BookingTourItinerary';
import BookingTourOverview from '../BookingTourOverview/BookingTourOverview';
import BookingTourReservation from '../BookingTourReservation/BookingTourReservation';
import './BookingTourNavBar.css';

const BookingTourNavBar = ({selectedTour}) => {
    console.log(selectedTour.overview);
    const [overviewBtn, setOverviewBtn] = useState(true);
    const [itineraryBtn, setItineraryBtn] = useState(false);
    const [includeBtn, setIncludeBtn] = useState(false);
    const [reservationBtn, setReservationBtn] = useState(false);

    const handleOverview = () => {
        setOverviewBtn(true);
        setItineraryBtn(false);
        setIncludeBtn(false);
        setReservationBtn(false);
    }

    const handleItinerary = () => {
        setOverviewBtn(false);
        setItineraryBtn(true);
        setIncludeBtn(false);
        setReservationBtn(false);
    }

    const handleInclude = () => {
        setOverviewBtn(false);
        setItineraryBtn(false);
        setIncludeBtn(true);
        setReservationBtn(false);
    }

    const handleReservation = () => {
        setOverviewBtn(false);
        setItineraryBtn(false);
        setIncludeBtn(false);
        setReservationBtn(true);
    }

    return (
        <section className="booking-tour-navbar">
            <div className="booking-tour-contents">
                <button onClick={handleOverview}>Overview</button>
                <button onClick={handleItinerary}>Itinerary</button>
                <button onClick={handleInclude}>What's Include</button>
                <button onClick={handleReservation}>Reservation</button>
            </div>
            <div className="booking-tour-component-info">
                { overviewBtn && <BookingTourOverview selectedTour={selectedTour} /> }
                { itineraryBtn && <BookingTourItinerary /> }
                { includeBtn && <BookingTourIncludingInfo selectedTour={selectedTour} /> }
                { reservationBtn && <BookingTourReservation selectedTour={selectedTour} /> }
            </div>
        </section>
    );
};

export default BookingTourNavBar;