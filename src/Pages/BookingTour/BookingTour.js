import React from 'react';
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
    return (
        <main style={{backgroundColor: "black"}}>
            <MainHeader />
            <BookingTourCover />
            <BookingTourNavBar />
            <BookingInfo />
            <BookingTourOverview />
            <BookingTourItinerary />
            <BookingTourIncludingInfo />
            <BookingTourReservation />
            <Purchase />
            <Footer />
        </main>
    );
};

export default BookingTour;