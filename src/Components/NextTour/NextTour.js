import React from 'react';
import ReactCompareImage from 'react-compare-image';
import './NextTour.css';
import leftImage from '../../images/nextTourleft.jpg';
import rightImage from '../../images/nextTourright.jpg';

const NextTour = () => {
    return (
        <section className="next-tour">
            <div className="nt-info">
                <div className="nt-info-content">
                    <h4>up coming tour</h4>
                    <h1>cox's bazar</h1>
                    <p className="nt-info-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero libero iusto iste ipsum quas inventore dolores vitae doloremque quos minima. Quaerat, cupiditate. Sint consectetur at blanditiis nostrum?</p>
                    <p className="nt-info-date">20 Feb - 27 Feb -6 Mar</p>
                    <button>Read more</button>
                </div>
            </div>
            <div className="nt-img">
                <ReactCompareImage className="nt-images-style"
                    leftImage={leftImage}
                    rightImage={rightImage}
                />
            </div>
        </section>
    );
};

export default NextTour;