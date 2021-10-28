import React from 'react';
import FeaturedTours from '../../Components/FeaturedTours/FeaturedTours';
import HomeCover from '../../Components/HomeCover/HomeCover';
import NextTour from '../../Components/NextTour/NextTour';
import PopularDestination from '../../Components/PopularDestination/PopularDestination';
import PopularTours from '../../Components/PopularTours/PopularTours';
import Purchase from '../../Components/Purchase/Purchase';
import Services from '../../Components/Services/Services';
import Footer from '../../Shared/Footer/Footer';
import MainHeader from '../../Shared/Header/MainHeader/MainHeader';

const Home = () => {
    return (
        <>
            <MainHeader />
            <HomeCover />
            <NextTour />
            <Services />
            <FeaturedTours />
            <PopularTours />
            <PopularDestination />
            <Purchase />
            <Footer />
        </>
    );
};

export default Home;