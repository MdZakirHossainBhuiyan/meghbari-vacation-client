import React from 'react';
import { useState, useEffect } from 'react';
import DashBoardContentCard from '../DashBoardContentCard/DashBoardContentCard';
import TopBar from '../TopBar/TopBar';
import './DashBoard.css';

const DashBoard = () => {
    const [searchEmail, setSearchEmail] = useState(null);
    const [searchedTour, setSearchedTour] = useState(null);
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const handleChange = e => {
        setSearchEmail(e.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsButtonClicked(true);
    }

    useEffect(() => {
        fetch('http://localhost:5000/searchedTour')
        .then(response => response.json())
        .then(data => setSearchedTour(
            data.filter(tour => tour.clientEmail==searchEmail)
        ))
    }, [searchEmail])

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

            <div className='searchedTourArea'>
                {
                    isButtonClicked && searchedTour.map(item => <DashBoardContentCard  item={item} />)
                }
            </div>
        </section>
    );
};

export default DashBoard;