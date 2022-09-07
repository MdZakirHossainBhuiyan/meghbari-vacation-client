import React, { useEffect } from 'react';
import FeaturedTour from '../FeatureTour/FeaturedTour';
import './FeaturedTours.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';
import { CircularProgress } from '@mui/material';

const FeaturedTours = (props) => {
    const [tours, setTours] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        const fetchToursData = async () => {
            setLoader(true);

            const result = await fetch('https://thawing-mesa-61898.herokuapp.com/featuredTours');
            const data = await result.json();
            setTours(data);

            setLoader(false);
        }

        fetchToursData();
    }, [])

    return (
        <section className="featured-tours-content">
            {
                (props.isHome!=='No') && <div>
                    <h2>Featured Tours</h2>
                    <p className='service-iconStyle'>-- <FontAwesomeIcon icon={faCarSide} /> --</p>
                </div>
            }
            {
                (!loader)?
                <div className="container featured-tours-items">
                    {
                        (tours?.length!==0)?tours?.map(tour => <FeaturedTour tour={tour} />)
                        :
                        <p className='warning'>
                            There have no tours
                        </p>
                        
                    }
                </div>
                :
                <div className='circularBar'>
                    <CircularProgress />
                </div>
            }
        </section>
    );
};

export default FeaturedTours;