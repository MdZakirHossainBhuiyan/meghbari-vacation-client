import React from 'react';
import TopBar from '../TopBar/TopBar';
import './BookingForm.css';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import { faCreditCard, faArrowAltCircleRight, faCarSide } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BookingForm = () => {

    const handleBlur = (e) => {
        
    }

    const handleSubmit = () => {

    }

    return (
        <section className="booking-form">
            <TopBar />
            <div className="booking-form-content">
                <div className="booking-form-main-area">
                    <p className="booking-form-top-icon"><FontAwesomeIcon icon={faCarSide} /></p>
                    <h1>Booking for <span>Greece and Turkey adventure</span></h1>

                    <div className="container booking-form-area">
                        <form onSubmit={handleSubmit}>
                            
                            <table className="table table-borderless">
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputName">Your name*</label>
                                                <input onBlur={handleBlur} type="name" className="form-control" name="name" />
                                            </div>
                                        </td>
                                        <td colSpan="2">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail">Your email*</label>
                                                <input onBlur={handleBlur} type="email" className="form-control" name="email" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPhone">Your phone*</label>
                                                <input onBlur={handleBlur} type="phone" className="form-control" name="phone" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputGender">Total Member*</label>
                                                <input onBlur={handleBlur} type="number" className="form-control" name="totalMember" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputGender">Male*</label>
                                                <input onBlur={handleBlur} type="number" className="form-control" name="totalMemberMale" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputGender">Female*</label>
                                                <input onBlur={handleBlur} type="number" className="form-control" name="totalMemberFemale" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputGender">Children*</label>
                                                <input onBlur={handleBlur} type="number" className="form-control" name="totalMemberChildren" />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            
                            <div className="booking-form-table">
                                <h1>Bill Details</h1>
                                <table class="table table-dark">
                                    <thead>
                                        <th  colSpan="2">Description</th>
                                        <th>Cost</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colSpan="2" class="table-active">Adult Member (5)</td>
                                            <td className="booking-form-cost">50,000 /=</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">Children (3)</td>
                                            <td className="booking-form-cost">27,000 /=</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2" class="table-active booking-form-bill">Payable Amount</td>
                                            <td className="booking-form-cost booking-form-bill">77,000 /=</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputPhone">Payment Method*</label><br />
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                    <label class="form-check-label" for="inlineRadio1"><FontAwesomeIcon className="booking-form-payment-icon" icon={faCreditCard} /> Credit Card</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                    <label class="form-check-label" for="inlineRadio2"><FontAwesomeIcon className="booking-form-payment-icon" icon={faPaypal} /> PayPal</label>
                                </div>
                            </div>

                            <table className="table table-borderless">
                                <tbody>
                                    <tr>
                                        <td colSpan="2">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputGender">Card Number</label>
                                                <input onBlur={handleBlur} type="text" className="form-control" name="cardNumber" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputGender">MM/YY</label>
                                                <input onBlur={handleBlur} type="date" className="form-control" name="date" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputGender">CVC</label>
                                                <input onBlur={handleBlur} type="text" className="form-control" name="cvc" />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            
                            <div className="booking-form-pay-btn">
                                <div>
                                    <p><FontAwesomeIcon className="booking-form-payment-icon" icon={faArrowAltCircleRight} /> Your service charge will be 500 taka</p>
                                </div>
                                <div>
                                    <button type="submit">Pay</button>
                                </div>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                <label class="form-check-label" for="defaultCheck1">
                                    I have read the <span>privacy policy</span> and I agree with <span>terms and conditions</span>.
                                </label>
                            </div>

                            <button type="submit">Submit Booking</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingForm;