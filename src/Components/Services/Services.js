import React from 'react';
import './Services.css';
import singleTour from '../../images/singleTour.jpg';
import GroupTour from '../../images/groupTour.jpg';
import CoupleTour from '../../images/coupleTour.jpg';
import FamilyTour from '../../images/familyTour.jpg';
import Service from '../Service/Service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';

const ServicesData = [
    {
        img: singleTour,
        title : 'Local Tour',
    },
    {
        img: GroupTour,
        title : 'International Tour',
    },
    {
        img: CoupleTour,
        title : 'Couple Facilities',
    },
    {
        img: FamilyTour,
        title : 'Family Facilities',
    },
]

const Services = () => {
    return (
        <section className="services-content">
            <h2>Our Services</h2>
            <p className='service-iconStyle'>-- <FontAwesomeIcon icon={faCarSide} /> --</p>
            <div className="container services-items">
                {
                    ServicesData.map(service => <Service service={service}></Service>)
                }
            </div>
        </section>
    );
};

export default Services;