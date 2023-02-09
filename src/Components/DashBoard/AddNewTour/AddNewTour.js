import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import TopBar from '../TopBar/TopBar';
import './AddNewTour.css';
import { useState } from 'react';
// import { useHistory } from 'react-router';

const AddNewTour = () => {
    const [info, setInfo] = useState(null);
    const [file, setFile] = useState(null);
    // const history = useHistory();

    const handleBlur = e => {
        const newInfo = { ...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("New tour added successfully");
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('startDate', info.startDate);
        formData.append('endDate', info.endDate);
        formData.append('seat', info.seat);
        formData.append('tourType', info.tourType);
        formData.append('activityLevel', info.activityLevel);
        formData.append('serviceType', info.serviceType);
        formData.append('tourCategory', info.tourCategory);
        formData.append('breakfast', info.breakfast);
        formData.append('lunch', info.lunch);
        formData.append('dinner', info.dinner);
        formData.append('accommodation', info.accommodation);
        formData.append('transportation', info.transportation);
        formData.append('activities', info.activities);
        formData.append('staff', info.staff);
        formData.append('shortDescription', info.shortDescription);
        formData.append('overview', info.overview);
        formData.append('entryFee', info.entryFee);
        formData.append('ageLimitation', info.ageLimitation);
        formData.append('day', info.day);
        formData.append('night', info.night);
        formData.append('country', info.country);
        formData.append('city', info.city);
        formData.append('place', info.place);


        fetch('https://meghbari-vacation-server.vercel.app/addTour', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if(data){
                console.log("tour added");
            }
        })
        .catch( (err) => {
            console.error(err);
        });
    }

    return (
        <section className="add-new-tour">
            <TopBar />
            <div className="add-new-tour-area">
                <div className="add-new-tour-content">
                    <h1>Add new tour</h1>
                    <form onSubmit={handleSubmit}>
                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    <td colSpan="2">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputTitle">Tour Title*</label>
                                            <input onBlur={handleBlur} type="title" className="form-control" name="title" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputStartDate">Starting Date*</label>
                                            <input onBlur={handleBlur} type="date" className="form-control" name="startDate" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEndDate">Ending Date*</label>
                                            <input onBlur={handleBlur} type="date" className="form-control" name="endDate" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputSeat">Number of Seat*</label>
                                            <input onBlur={handleBlur} type="seat" className="form-control" name="seat" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputType">Tour Type*</label>
                                            <select onBlur={handleBlur} name="tourType" class="form-select" aria-label="Default select example">
                                                <option value="Adventures">Adventures</option>
                                                <option value="city Tours">City tours</option>
                                                <option value="culinary Tours">Culinary tours</option>
                                                <option value="daily Tours">Daily tours</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputActivity">Activity Level*</label>
                                            <select onBlur={handleBlur} name="activityLevel" class="form-select" aria-label="Default select example">
                                                <option value="Light pace">Light pace</option>
                                                <option value="Moderate pace">Moderate pace</option>
                                                <option value="Active pace">Active pace</option>
                                                <option value="Challenging pace">Challenging pace</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputServiceType">Service Type*</label>
                                            <select onBlur={handleBlur} name="serviceType" class="form-select" aria-label="Default select example">
                                                <option value="Basic">Basic</option>
                                                <option value="Upgraded">Upgraded</option>
                                                <option value="Luxury">Luxury</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputServiceType">Tour Category*</label>
                                            <select onBlur={handleBlur} name="tourCategory" class="form-select" aria-label="Default select example">
                                                <option value="Bangladesh Tours">Bangladesh Tours</option>
                                                <option value="Asia Tours">Asia Tours</option>
                                                <option value="Africa Tours">Africa Tours</option>
                                                <option value="Australia and Pacific Tours">Australia & Pacific Tours</option>
                                                <option value="Europe Tours">Europe Tours</option>
                                                <option value="Polar Regions Tours">Polar Regions Tours</option>
                                                <option value="South America Tours">South America Tours</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputMeals">Meals*</label>
                                            <input onBlur={handleBlur} type="number" className="form-control" placeholder="Breakfast" name="breakfast" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-group">
                                            <label htmlFor=""></label>
                                            <input onBlur={handleBlur} type="number" className="form-control" placeholder="Lunch" name="lunch" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-group">
                                            <label htmlFor=""></label>
                                            <input onBlur={handleBlur} type="number" className="form-control" placeholder="Dinner" name="dinner" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputServiceType">Accommodation*</label>
                                            <select onBlur={handleBlur} name="accommodation" class="form-select" aria-label="Default select example">
                                                <option value="Hotel">Hotel</option>
                                                <option value="Cottage">Cottage</option>
                                                <option value="Tent">Tent</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputServiceType">Transportation*</label>
                                            <input onBlur={handleBlur} type="transportation" className="form-control" name="transportation" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputServiceType">Activities*</label>
                                            <input onBlur={handleBlur} type="activities" className="form-control" name="activities" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputServiceType">Staff & Experts*</label>
                                            <input onBlur={handleBlur} type="staff" className="form-control" name="staff" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputServiceType">Short description*</label>
                                            <textarea onBlur={handleBlur} type="description" className="form-control" name="shortDescription" />
                                        </div>
                                    </td>
                                    <td colSpan="2">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputServiceType">Overview*</label>
                                            <textarea onBlur={handleBlur} type="overview" className="form-control" name="overview" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputServiceType">Entry Fee*</label>
                                            <input onBlur={handleBlur} type="number" className="form-control" name="entryFee" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputServiceType">Age Limitation*</label>
                                            <input onBlur={handleBlur} type="ageLimitation" className="form-control" name="ageLimitation" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputServiceType">Numbers of day*</label>
                                            <input onBlur={handleBlur} type="day" className="form-control" name="day" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputServiceType">Numbers of night*</label>
                                            <input onBlur={handleBlur} type="night" className="form-control" name="night" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputServiceType">numbers of country*</label>
                                            <input onBlur={handleBlur} type="country" className="form-control" name="country" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputServiceType">Numbers of city*</label>
                                            <input onBlur={handleBlur} type="city" className="form-control" name="city" />
                                        </div>
                                    </td>
                                    <td colSpan="2">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputServiceType">Numbers of place*</label>
                                            <input onBlur={handleBlur} type="place" className="form-control" name="place" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="4">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputServiceType">Cover Image*</label>
                                            <input onChange={handleFileChange} type="file" className="form-control" placeholder="Picture" />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                            
                        </table>

                        <div className="add-new-tour-btn">
                            <button type="submit">Add New Tour <FontAwesomeIcon icon={faCarSide} /></button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddNewTour;