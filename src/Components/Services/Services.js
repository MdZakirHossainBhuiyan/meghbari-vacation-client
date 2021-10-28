import React from 'react';
import './Services.css';
import singleTour from '../../images/singleTour.jpg';
import GroupTour from '../../images/groupTour.jpg';
import CoupleTour from '../../images/coupleTour.jpg';
import FamilyTour from '../../images/familyTour.jpg';
import Service from '../Service/Service';

const ServicesData = [
    {
        img: singleTour,
        title : 'Single Tour',
    },
    {
        img: GroupTour,
        title : 'Group Tour',
    },
    {
        img: CoupleTour,
        title : 'Couple Tour',
    },
    {
        img: FamilyTour,
        title : 'Family Tour',
    },
]

const Services = () => {
    return (
        <section className="services-content">
            <h2>Our Services</h2>
            <div className="container services-items">
                {
                    ServicesData.map(service => <Service service={service}></Service>)
                }
            </div>
        </section>
    );
};

export default Services;