import { CircularProgress } from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';
import DashBoardContentCard from '../DashBoardContentCard/DashBoardContentCard';
import TopBar from '../TopBar/TopBar';
import './DashBoard.css';

const DashBoard = () => {
    const [searchEmail, setSearchEmail] = useState(null);
    const [searchedTour, setSearchedTour] = useState(null);
    const [loader, setLoader] = useState(false);

    const handleChange = e => {
        setSearchEmail(e.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoader(true);

        const result = await fetch('https://thawing-mesa-61898.herokuapp.com/searchedTour')
        const data = await result.json();
        setSearchedTour(
            data.filter(tour => tour.clientEmail==searchEmail)
        )

        setLoader(false);
    }

    return (
        <section className='user-dashboard'>
            <TopBar />
            <div className='userDashboard-content'>
                <div className='userDashboard-searchBox'>
                    <h1>Search Your Tours</h1>

                    <form onSubmit={handleSubmit}>
                        <div className='userDashboard-inputArea'>
                            <div className='userDashboard-inputField'>
                                <input onChange={handleChange} type="search" name="searchByEmail" placeholder="Search by email" />
                            </div>
                            <div className='userDashboard-inputButton'>
                                <button disabled={!searchEmail} type="submit" className={(!searchEmail)?'disable-Button':'active-Button'}>Search</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {
                (!loader)?
                <div className='searchedTourArea'>
                    {
                        (searchedTour?.length!==0)?searchedTour?.map(item => <DashBoardContentCard  item={item} />)
                        :
                        <p className='dashboardWarning'>
                            You have no booking information
                        </p>
                    }
                </div>
                :
                <div className='searchedTourArea circularBar'>
                    <CircularProgress />
                </div>
            }
        </section>
    );
};

export default DashBoard;