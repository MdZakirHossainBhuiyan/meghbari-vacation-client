import React, { useContext, useEffect, useState } from 'react';
import TopBar from '../TopBar/TopBar';
import './BookingForm.css';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import { faCreditCard, faArrowAltCircleRight, faCarSide } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useParams} from "react-router";
import { UserContext } from '../../../App';
// import CreditCard from '../../CreditCard/CreditCard';
// import PayPal from '../../Paypal/PayPal';

const BookingForm = () => {
    const {selectedTourId} = useParams();
    const [selectedTourInfo, setSelectedTourInfo] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [clientInfo, setClientInfo] = useState(null);
    // const [creditCard, setCreditCard] = useState(false);
    // const [payPal, setPayPal] = useState(false);

    console.log("clientInfo ", clientInfo);

    // const handleCreditCard = () => {
    //     setCreditCard(true);
    //     setPayPal(false);
    // }

    // const handlePayPal = () => {
    //     setPayPal(true);
    //     setCreditCard(false);
    // }

    useEffect(() => {
        fetch('http://localhost:5000/booking/'+ selectedTourId)
        .then(response => response.json())
        .then(data => setSelectedTourInfo(data))
    }, [selectedTourId])

    const handleBlur = e => {
        const clientNewInfo = { ...clientInfo};
        if(clientInfo?.totalMemberMale && clientInfo?.totalMemberFemale){
            const amountOfEntryFee = selectedTourInfo?.entryFee;
            const adultMember = (+clientInfo?.totalMemberMale) + (+clientInfo?.totalMemberFemale);
            const childMember = (+clientInfo?.totalMember) - adultMember;
            const adultMemberCost = adultMember * amountOfEntryFee;
            const childMemberCost = ((15*amountOfEntryFee)/100)*childMember;
            const payableAmount = adultMemberCost + childMemberCost;

            clientNewInfo["adultMember"] = adultMember;
            setClientInfo(clientNewInfo);
            clientNewInfo["adultMemberCost"] = adultMemberCost;
            setClientInfo(clientNewInfo);
            clientNewInfo["childMember"] = childMember;
            setClientInfo(clientNewInfo);
            clientNewInfo["childMemberCost"] = childMemberCost;
            setClientInfo(clientNewInfo);
            clientNewInfo["payableAmount"] = payableAmount;
            setClientInfo(clientNewInfo);
        }
        else{
            clientNewInfo[e.target.name] = e.target.value;
            setClientInfo(clientNewInfo);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("booked your tour and waiting for companies confirmation");
        const formData = new FormData()
        formData.append('tourId', selectedTourInfo._id);
        formData.append('tourTitle', selectedTourInfo.title);
        formData.append('clientName', clientInfo.name);
        formData.append('clientEmail', clientInfo.email);
        formData.append('clientPhone', clientInfo.phone);
        formData.append('totalMember', clientInfo.totalMember);
        formData.append('maleMember', clientInfo.totalMemberMale);
        formData.append('femaleMember', clientInfo.totalMemberFemale);
        formData.append('childrenMember', clientInfo.totalMemberChildren);
        formData.append('adultMemberCost', clientInfo.adultMemberCost);
        formData.append('childMemberCost', clientInfo.childMemberCost);
        formData.append('payableAmount', clientInfo.payableAmount);
        formData.append('paymentMethod', clientInfo.paymentMethod);
        formData.append('cardNumber', clientInfo.cardNumber);
        formData.append('cardName', clientInfo.cardName);
        formData.append('expiry', clientInfo.expiry);
        formData.append('cvc', clientInfo.cvc);
        formData.append('status', "Pending");

        fetch('http://localhost:5000/bookedTour', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log('booked your tour and waiting for companies confirmation');
        })
        .catch((err) => {
            console.error(err);
        })
    }

    return (
        <section className="booking-form">
            <TopBar />
            <div className="booking-form-content">
                <div className="booking-form-main-area">
                    <p className="booking-form-top-icon"><FontAwesomeIcon icon={faCarSide} /></p>
                    <h1>Booking for <span>{selectedTourInfo.title}</span></h1>

                    <div className="container booking-form-area">
                        <form onSubmit={handleSubmit}>
                            
                            <table className="table table-borderless">
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputName">Your name*</label>
                                                <input onBlur={handleBlur} type="name" value={loggedInUser.name} className="form-control" name="name" />
                                            </div>
                                        </td>
                                        <td colSpan="2">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail">Your email*</label>
                                                <input onBlur={handleBlur} type="email" className="form-control" name="email" value={loggedInUser.email} />
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
                                            <td colSpan="2" class="table-active">Adult Member ({clientInfo?.adultMember})</td>
                                            <td className="booking-form-cost">{clientInfo?.adultMemberCost} /=</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">Children ({clientInfo?.childMember})</td>
                                            <td className="booking-form-cost">{clientInfo?.childMemberCost} /=</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2" class="table-active booking-form-bill">Payable Amount</td>
                                            <td className="booking-form-cost booking-form-bill">{clientInfo?.payableAmount} /=</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* <div className="form-group">
                                <label htmlFor="exampleInputPhone">Payment Method*</label><br />
                                <div class="form-check form-check-inline">
                                    <input onClick={handleCreditCard} class="form-check-input" type="radio" name="paymentMethod" id="inlineRadio1" value="Credit Card" />
                                    <label class="form-check-label" for="inlineRadio1"><FontAwesomeIcon className="booking-form-payment-icon" icon={faCreditCard} /> Credit Card</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input onClick={handlePayPal} class="form-check-input" type="radio" name="paymentMethod" id="inlineRadio2" value="Paypal" />
                                    <label class="form-check-label" for="inlineRadio2"><FontAwesomeIcon className="booking-form-payment-icon" icon={faPaypal} /> PayPal</label>
                                </div>
                            </div>
                            
                            {creditCard && <CreditCard />}
                            {payPal && <PayPal />} */}

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