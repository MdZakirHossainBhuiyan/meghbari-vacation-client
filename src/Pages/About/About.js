import React from 'react';
import AboutUs from '../../Components/AboutUs/AboutUs';
import Purchase from '../../Components/Purchase/Purchase';
import Footer from '../../Shared/Footer/Footer';
import MainHeader from '../../Shared/Header/MainHeader/MainHeader';
import './About.css';

const About = () => {
    return (
        <>
            <MainHeader />
            <AboutUs />
            <Purchase />
            <Footer />
        </>
    );
};

export default About;