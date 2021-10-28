import React from 'react';
import NavBar from '../NavBar/NavBar';
import TopHeader from '../TopHeader/TopHeader';
import './MainHeader.css';

const MainHeader = () => {
    return (
        <div>
            <TopHeader />
            <NavBar />
        </div>
    );
};

export default MainHeader;