import React, { useEffect } from 'react';
import './PopularTours.css';
import pt1 from '../../images/pt1.jpg';
import pt2 from '../../images/pt2.jpg';
import pt3 from '../../images/pt3.jpg';
import pt4 from '../../images/pt4.jpg';
import pt5 from '../../images/pt5.jpg';
import pt6 from '../../images/pt6.jpg';
import pt7 from '../../images/pt7.jpg';
import pt8 from '../../images/pt8.jpg';
import PopularTour from '../PopularTour/PopularTour';
import { useState } from 'react';

// const popularTourData = [
//     {
//         id: 1,
//         img: pt1,
//         title : 'Wine and Food Barossa Valley',
//         day: 1,
//         country: 1,
//         city: 5,
//         description: 'Omnis iste natus error sit voluptatem accusantium doloremque laudantium totam.',
//     },
//     {
//         id: 2,
//         img: pt2,
//         title : 'Wild Galapagos & Peru Escape',
//         day: 9,
//         country: 2,
//         city: 7,
//         description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.',
//     },
//     {
//         id: 3,
//         img: pt3,
//         title : 'Uluru Rock & Surroundings',
//         day: 4,
//         country: 1,
//         city: 9,
//         description: 'Et harum quidem rerum facilis est et expedita distinctio nam libero tempore.',
//     },
//     {
//         id: 4,
//         img: pt4,
//         title : 'Portugal and Spain adventure',
//         day: 14,
//         country: 2,
//         city: 42,
//         description: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe.',
//     },
//     {
//         id: 5,
//         img: pt5,
//         title : 'Morocco Culinary Experience',
//         day: 7,
//         country: 1,
//         city: 12,
//         description: 'Veritatis et quasi architecto beatae vitae dicta sunt explicabo perspiciatis.',
//     },
//     {
//         id: 6,
//         img: pt6,
//         title : 'Lima to Buenos Aires – Upon request',
//         day: 14,
//         country: 4,
//         city: 27,
//         description: 'Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
//     },
//     {
//         id: 7,
//         img: pt7,
//         title : 'Laos, Cambodia and Vietnam',
//         day: 22,
//         country: 3,
//         city: 10,
//         description: 'Magni dolores eos qui ratione voluptatem sequi nesciunt totam rem aperiam.',
//     },
//     {
//         id: 8,
//         img: pt8,
//         title : 'Kenya: Elephants Rhinos and Big Cats',
//         day: 7,
//         country: 1,
//         city: 13,
//         description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
//     },
// ]

const PopularTours = () => {
    const [pTours, setPTours] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/popularTours")
        .then(response => response.json())
        .then(data => setPTours(data))
    }, [])

    return (
        <section className="popular-tours-container">
            <div className="popular-tour-header">
                <div className="popular-tour-header-info">
                    <h1>Popular Tour Packages</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, sunt ipsa reiciendis repellat fugiat exercitationem?</p>
                </div>
                <div className="popular-tour-header-link">
                    <a href="/view">/ View All Tours</a>
                </div>
            </div>
            <div className="container popular-tours-items">
                {
                    pTours.map(popularTour => <PopularTour popularTour={popularTour} />)
                }
            </div>
        </section>
    );
};

export default PopularTours;