import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BookingTourCover from '../../Components/BookingTour/BookingTourCover/BookingTourCover';
import BookingTourIncludingInfo from '../../Components/BookingTour/BookingTourIncludingInfo/BookingTourIncludingInfo';
import BookingInfo from '../../Components/BookingTour/BookingTourInfo/BookingTourInfo';
import BookingTourItinerary from '../../Components/BookingTour/BookingTourItinerary/BookingTourItinerary';
import BookingTourNavBar from '../../Components/BookingTour/BookingTourNavBar/BookingTourNavBar';
import BookingTourOverview from '../../Components/BookingTour/BookingTourOverview/BookingTourOverview';
import BookingTourReservation from '../../Components/BookingTour/BookingTourReservation/BookingTourReservation';
import Purchase from '../../Components/Purchase/Purchase';
import Footer from '../../Shared/Footer/Footer';
import MainHeader from '../../Shared/Header/MainHeader/MainHeader';

const BookingTour = () => {
    const {tourId} = useParams();
    const [selectedTour, setSelectedTour] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/booking/'+tourId)
        .then(response => response.json())
        .then(data => setSelectedTour(data))
    }, [tourId])

    console.log("selectedTour ",selectedTour);

    return (
        <main style={{backgroundColor: "black"}}>
            <MainHeader />
            <BookingTourCover />
            <div style={{display: "flex"}}>
                <BookingTourNavBar />
                <BookingInfo />
            </div>
            <Purchase />
            <Footer />
        </main>
    );
};

export default BookingTour;