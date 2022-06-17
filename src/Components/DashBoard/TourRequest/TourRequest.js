import React, { useEffect, useState } from 'react';
import TopBar from '../TopBar/TopBar';
import TourRequestCard from '../TourRequestCard/TourRequestCard';
import './TourRequest.css';

const TourRequest = () => {
    const [requestedTours, setRequestedTour] = useState(null);

    console.log("booked tour", requestedTours);

    useEffect(() => {
        fetch('http://localhost:5000/searchedTour')
        .then(response => response.json())
        .then(data => setRequestedTour(
            data.filter(rTour => rTour.status=='Pending')
        ))
    }, [])

    return (
        <section className='requestedTour-section'>
            <TopBar />
            <div className='requestedTour-body'>
                <div className='requestedTour-heading'>
                    <h1>Updated Requested Tour List</h1>
                </div>
                <div className='requestedTour-cards'>
                    {
                        (requestedTours!=null) && requestedTours.map(item => <TourRequestCard item={item} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default TourRequest;