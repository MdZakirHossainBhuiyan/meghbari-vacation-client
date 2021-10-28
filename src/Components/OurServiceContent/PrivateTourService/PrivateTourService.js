import React from 'react';
import './PrivateTourService.css';
import Image from '../../../images/ptRight.jpg';

const PrivateTourService = () => {
    return (
        <section className="container luxury-tour">
            <div className="lt-info">
                <div className="lt-info-content">
                    <h1>Private tours for a pristine experience</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. <br /><br />Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. <br /><br />Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
                </div>
            </div>
            <div className="lt-img">
                <img src={Image} alt="" />
            </div>
        </section>
    );
};

export default PrivateTourService;