import React from 'react';
import './PrivateAviationService.css';
import Image from '../../../images/paLeft.jpg';

const PrivateAviationService = () => {
    return (
        <section className="container privateAviation-tour">
            <div className="pa-img">
                <img src={Image} alt="" />
            </div>
            <div className="pa-info">
                <div className="pa-info-content">
                    <h1>The finest luxury in private aviation</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. <br /><br />Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. <br /><br />Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
                </div>
            </div>
            
        </section>
    );
};

export default PrivateAviationService;