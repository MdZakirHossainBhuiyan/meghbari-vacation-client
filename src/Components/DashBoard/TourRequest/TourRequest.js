import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TopBar from '../TopBar/TopBar';
import TourRequestCard from '../TourRequestCard/TourRequestCard';
import './TourRequest.css';

const TourRequest = () => {
    const [requestedTours, setRequestedTour] = useState(null);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        const fetchPendingTour = async () => {
            setLoader(true);

            const result = await fetch('https://meghbari-vacation-server.vercel.app/searchedTour');
            const data = await result.json();
            setRequestedTour(
                data.filter(rTour => rTour.status=='Pending')
            )

            setLoader(false);
        }

        fetchPendingTour()
    }, [])

    return (
        <section className='requestedTour-section'>
            <TopBar />
            <div className='requestedTour-body'>
                <div className='requestedTour-heading'>
                    <h1>Updated Requested Tour List</h1>
                </div>
                {
                    (!loader)?
                    <div className='requestedTour-cards'>
                        {
                            (requestedTours?.length!==0)?requestedTours?.map(item => <TourRequestCard item={item} />)
                            :
                            <p className='warning'>
                                There have no pending booking
                            </p>
                        }
                    </div>
                    :
                    <div className='requestedTour-cards circularBar'>
                        <CircularProgress />
                    </div>
                }
            </div>
        </section>
    );
};

export default TourRequest;