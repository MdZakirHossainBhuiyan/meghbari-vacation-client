import React, { useState } from 'react';
import './TourRequestCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationArrow } from '@fortawesome/free-solid-svg-icons';

const TourRequestCard = ({item}) => {
    const id = item._id;
    const [updateItem, setUpdateItem] = useState(item);

    const handleStatus = (id) => {
        fetch(`http://localhost:5000/update/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateItem)
        })
        .then(res => res.json())
        .then(data => {
            alert('Updated successfully');
        })
    }

    return (
        <div className='requestedTourCard-body'>
            <div className='requestedTourCard-heading'>
                <h2>{item.clientFName} {item.clientLName}</h2>
                <div className='status-button'>
                    <button onClick={() => handleStatus(id)}>Accept Tour</button>
                </div>
            </div>
            <div className='requestedTourCard-Property'>
                <div className='requestedTourCard-content'>
                    <h3>{item.tourTitle}</h3>
                    <p><span  className='iconStyle'><FontAwesomeIcon icon={faEnvelope} /></span> {item.clientEmail}</p>
                    <p><span  className='iconStyle'><FontAwesomeIcon icon={faPhone} /></span> {item.clientPhone}</p>
                    <p><span  className='iconStyle'><FontAwesomeIcon icon={faLocationArrow} /></span> {item.clientAddress}</p>
                </div>
                <div className='requestedTourCard-member'>
                    <table>
                        <tr>
                            <td>Total Member</td>
                            <td> : </td>
                            <td>{item.totalMember}</td>
                        </tr>
                        <tr>
                            <td>Male</td>
                            <td> : </td>
                            <td>{item.maleMember}</td>
                        </tr>
                        <tr>
                            <td>Female</td>
                            <td> : </td>
                            <td>{item.femaleMember}</td>
                        </tr>
                        <tr>
                            <td>Child</td>
                            <td> : </td>
                            <td>{item.childrenMember}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className='requestedTourCard-alert'>
                <p>**Tour request is pending now. Click the "Accept Tour" button to make it accepted.</p>
            </div>
        </div>
    );
};

export default TourRequestCard;