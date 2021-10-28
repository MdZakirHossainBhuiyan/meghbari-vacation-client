import React from 'react';
import OurServiceContent from '../../Components/OurServiceContent/OurServiceContent';
import Purchase from '../../Components/Purchase/Purchase';
import Footer from '../../Shared/Footer/Footer';
import MainHeader from '../../Shared/Header/MainHeader/MainHeader';

const OurServiceHome = () => {
    return (
        <>
            <MainHeader />
            <OurServiceContent />
            <Purchase />
            <Footer />
        </>
    );
};

export default OurServiceHome;