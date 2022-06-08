import React, { useContext, useEffect, useState } from 'react';
import TopBar from '../TopBar/TopBar';
import './BookingForm.css';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useParams} from "react-router";
import { UserContext } from '../../../App';

const BookingForm = () => {
    const {selectedTourId} = useParams();
    const [selectedTourInfo, setSelectedTourInfo] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [clientInfo, setClientInfo] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/booking/'+ selectedTourId)
        .then(response => response.json())
        .then(data => setSelectedTourInfo(data))
    }, [selectedTourId])

    const handleBlur = e => {
        const clientNewInfo = { ...clientInfo};
            clientNewInfo[e.target.name] = e.target.value;
            setClientInfo(clientNewInfo);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("booked your tour successfully. Please wait for companies confirmation");
        const formData = new FormData()
        formData.append('tourId', selectedTourInfo._id);
        formData.append('tourTitle', selectedTourInfo.title);
        formData.append('clientFName', clientInfo.fname);
        formData.append('clientLName', clientInfo.lname);
        formData.append('clientEmail', clientInfo.email);
        formData.append('clientAddress', clientInfo.address);
        formData.append('clientPhone', clientInfo.phone);
        formData.append('totalMember', clientInfo.totalMember);
        formData.append('maleMember', clientInfo.totalMemberMale);
        formData.append('femaleMember', clientInfo.totalMemberFemale);
        formData.append('childrenMember', clientInfo.totalMemberChildren);
        formData.append('status', "Pending");

        fetch('http://localhost:5000/bookedTour', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log('booked your tour and wait for companies confirmation');
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
                                                <label htmlFor="exampleInputName">First Name*</label>
                                                <input onBlur={handleBlur} type="fname" className="form-control" name="fname" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputName">Last Name*</label>
                                                <input onBlur={handleBlur} type="lname" className="form-control" name="lname" />
                                            </div>
                                        </td>
                                        <td colSpan="2">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail">Your Email*</label>
                                                <input onBlur={handleBlur} type="email" className="form-control" name="email" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputGender">Address*</label>
                                                <input onBlur={handleBlur} type="address" className="form-control" name="address" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPhone">Your phone*</label>
                                                <input onBlur={handleBlur} type="phone" className="form-control" name="phone" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputGender">Total Member*</label>
                                                <input onBlur={handleBlur} type="number" className="form-control" name="totalMember" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
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
                                        <td colSpan="2">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputGender">Children*</label>
                                                <input onBlur={handleBlur} type="number" className="form-control" name="totalMemberChildren" />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

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