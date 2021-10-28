import React from 'react';
import './BookingTourInquiryForm.css';

const BookingTourInquiryForm = () => {

    const handleBlur = (e) => {
        
    }

    const handleSubmit = () => {

    }

    return (
        <section className="booking-tour-inquiry-form">
            <div className="container booking-tour-inquiry-form-content">
                <h1>Use the form below to contact us directly.</h1>

                <p>Please complete all required fields.</p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputName">Your name*</label>
                        <input onBlur={handleBlur} type="name" className="form-control" name="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail">Your email*</label>
                        <input onBlur={handleBlur} type="email" className="form-control" name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPhone">Your phone*</label>
                        <input onBlur={handleBlur} type="phone" className="form-control" name="phone" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">What would you like to inquire about?*</label>
                        <textarea onBlur={handleBlur} type="description" className="form-control" rows="5" name="description" />
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">
                            I have read the <span>privacy policy</span> and I agree with <span>terms and conditions</span>.
                        </label>
                    </div>

                    <button type="submit">Submit Inquiry</button>
                </form>
            </div>
        </section>
    );
};

export default BookingTourInquiryForm;