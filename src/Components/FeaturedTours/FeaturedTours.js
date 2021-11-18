import React, { useEffect } from 'react';
import FeaturedTour from '../FeatureTour/FeaturedTour';
import './FeaturedTours.css';

import wfbv1 from '../../images/wfbv1.jpg';
import gta2 from '../../images/gta2.jpg';
import gae3 from '../../images/gae3.jpg';
import ecf4 from '../../images/ecf4.jpg';
import erfe5 from '../../images/erfe5.jpg';
import psa6 from '../../images/psa6.jpg';
import cpcs7 from '../../images/cpcs7.jpg';
import eshdt8 from '../../images/eshdt8.jpg';
import { useState } from 'react';

const featuredToursData = [
    {
        id: 1,
        img: wfbv1,
        title: 'Wine and Food Barossa Valley',
        description: 'Omnis iste natus error sit voluptatem accusantium doloremque laudantium totam.',
    },
    {
        id: 2,
        img: gta2,
        title: 'Greece and Turkey Adventure',
        description: 'Omnis iste natus error sit voluptatem accusantium doloremque laudantium totam.',
    },
    {
        id: 3,
        img: gae3,
        title : 'Great Antarctica Expedition',
        description: 'Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam.',
    },
    {
        id: 4,
        img: ecf4,
        title : 'Enjoying Culinary France',
        description: 'Voluptates repudiandae sint et molestiae non recusandae qui dolorem ipsum quia.',
    },
    {
        id: 5,
        img: erfe5,
        title : 'Exploring Russia’s Far East',
        description: 'Nisi ut aliquid ex ea commodi consequatur dicta sunt beatae vitae explicabo.',
    },
    {
        id: 6,
        img: psa6,
        title : 'Portugal and Spain Adventure',
        description: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe.',
    },
    {
        id: 7,
        img: cpcs7,
        title : 'Culinary Pearls of Classic Spain',
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit maxime.',
    },
    {
        id: 8,
        img: eshdt8,
        title : 'Essential Sydney Half Day Tour',
        description: 'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.',
    },
]

const FeaturedTours = () => {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/featuredTours')
        .then(response => response.json())
        .then(data => setTours(data))
    }, [])

    return (
        <section className="featured-tours-content">
            <h2>Featured Tours</h2>
            <div className="container featured-tours-items">
                {
                    tours.map(tour => <FeaturedTour tour={tour} />)
                }
            </div>
        </section>
    );
};

export default FeaturedTours;