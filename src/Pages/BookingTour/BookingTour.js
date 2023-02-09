import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BookingTourCover from '../../Components/BookingTour/BookingTourCover/BookingTourCover';
import BookingInfo from '../../Components/BookingTour/BookingTourInfo/BookingTourInfo';
import BookingTourNavBar from '../../Components/BookingTour/BookingTourNavBar/BookingTourNavBar';
import Purchase from '../../Components/Purchase/Purchase';
import Footer from '../../Shared/Footer/Footer';
import MainHeader from '../../Shared/Header/MainHeader/MainHeader';

const BookingTour = () => {
    const {tourId} = useParams();
    const [selectedTour, setSelectedTour] = useState({});

    useEffect(() => {
        fetch('https://meghbari-vacation-server.vercel.app/booking/'+ tourId)
        .then(response => response.json())
        .then(data => setSelectedTour(data))
    }, [tourId])

    return (
        <main style={{backgroundColor: "black"}}>
            <MainHeader />
            <BookingTourCover  selectedTour={selectedTour} />
            <div style={{display: "flex"}}>
                <BookingTourNavBar selectedTour={selectedTour} />
                <BookingInfo selectedTour={selectedTour} />
            </div>
            <Purchase />
            <Footer />
        </main>
    );
};

export default BookingTour;