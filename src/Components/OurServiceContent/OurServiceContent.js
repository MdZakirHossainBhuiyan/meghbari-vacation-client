import React from 'react';
import './OurServiceContent.css';
import LuxuryTourService from './LuxuryTourService/LuxuryTourService';
import PrivateAviationService from './PrivateAviationService/PrivateAviationService';
import PrivateTourService from './PrivateTourService/PrivateTourService';

const OurServiceContent = () => {
    return (
        <main className="our-service-content">
            <h1 className="container our-service-content-h1">Our Services</h1>
            <LuxuryTourService />
            <PrivateAviationService />
            <PrivateTourService />
        </main>
    );
};

export default OurServiceContent;