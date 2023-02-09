import React, { useEffect } from 'react';
import './PopularTours.css';
import PopularTour from '../PopularTour/PopularTour';
import { useState } from 'react';
import { CircularProgress } from '@mui/material';

const PopularTours = () => {
    const [pTours, setPTours] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        const fetchToursData = async () => {
            setLoader(true);

            const result = await fetch("https://meghbari-vacation-server.vercel.app/popularTours");
            const data = await result.json();
            setPTours(data);

            setLoader(false);
        }

        fetchToursData();
    }, [])

    return (
        <section className="popular-tours-container">
            <div className="popular-tour-header">
                <div className="popular-tour-header-info">
                    <h1>Popular Tour Packages</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, sunt ipsa reiciendis repellat fugiat exercitationem?</p>
                </div>
                <div className="popular-tour-header-link">
                    <a href="/tours">/ View All Tours</a>
                </div>
            </div>

            {
                (!loader)?
                <div className="container popular-tours-items">
                    {
                        (pTours?.length!==0)?pTours?.map(popularTour => <PopularTour popularTour={popularTour} />)
                        :
                        <p className='warning'>
                            There have no tours
                        </p>
                        
                    }
                </div>
                :
                <div className='circularBar'>
                    <CircularProgress />
                </div>
            }
        </section>
    );
};

export default PopularTours;