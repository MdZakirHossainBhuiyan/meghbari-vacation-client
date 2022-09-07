import { CircularProgress } from '@mui/material';
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
        const fetchToursData = async () => {
            setLoader(true);

            const result = await fetch('https://thawing-mesa-61898.herokuapp.com/featuredTours');
            const data = await result.json();
            setTours(data);

            setLoader(false);
        }

        fetchToursData();
    }, [])


    return (
        <section className='tourLists'>
            <TopBar />
            <div className='tourLists-area'>
                <div className='tourLists-content'>
                    <h3>All Tour Packages</h3>
                </div>
                {
                    (!loader)?
                    <div className='tourLists-cardArea'>
                        {
                            (tours?.length!==0)?tours?.map(tour => <TourListCard tour={tour} />)
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
            </div>
        </section>
    );
};

export default TourLists;