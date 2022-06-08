import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import TopBar from '../TopBar/TopBar';
import TourListCard from '../TourListCard/TourListCard';
import './TourLists.css';

const TourLists = () => {
    const [tours, setTours] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);

        fetch('http://localhost:5000/featuredTours')
        .then(response => response.json())
        .then(data => setTours(data))

        setLoader(false);
    }, [])


    return (
        <section className='tourLists'>
            <TopBar />
            <div className='tourLists-area'>
                <div className='tourLists-content'>
                    <h3>All Tour Packages</h3>
                </div>
                <div className='tourLists-cardArea'>
                    {
                        tours.map(tour => <TourListCard tour={tour} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default TourLists;