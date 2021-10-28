import React from 'react';
import './Service.css';

const Service = ({service}) => {
    return (
        <div className="serviceItem-content">
            <div className="serviceItem-image">
                <img src={service.img} alt="" />
            </div>
            <div className="serviceItem-info">
                <h3>{service.title}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto minima veniam est rerum.</p>
            </div>
        </div>
    );
};

export default Service;