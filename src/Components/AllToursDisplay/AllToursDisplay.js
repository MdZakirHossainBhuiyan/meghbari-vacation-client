import React from 'react';
import './AllToursDisplay.css';
import coverImage from '../../images/aplaces-ineurope.png';
import FeaturedTours from '../FeaturedTours/FeaturedTours';

const AllToursDisplay = () => {
    return (
        <section className='allToursDisplay'>
            <div className='toursCoverImage'>
                <img src={coverImage} alt="cover-img" />
            </div>
            <div className='displayTours'>
                <FeaturedTours isHome={'No'} />
            </div>
        </section>
    );
};

export default AllToursDisplay;