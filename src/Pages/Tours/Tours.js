import React from 'react';
import AllToursDisplay from '../../Components/AllToursDisplay/AllToursDisplay';
import Purchase from '../../Components/Purchase/Purchase';
import Footer from '../../Shared/Footer/Footer';
import MainHeader from '../../Shared/Header/MainHeader/MainHeader';

const Tours = () => {
    return (
        <>
            <MainHeader />
            <AllToursDisplay />
            <Purchase />
            <Footer />
        </>
    );
};

export default Tours;