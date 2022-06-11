import React from 'react';
import './DashBoardContentCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationArrow } from '@fortawesome/free-solid-svg-icons';

const DashBoardContentCard = ({item}) => {

    return (
        <div className='searchedTourCard'>
            <div className='tourCard-status'>
                <h2>{item.tourTitle}</h2>
                <div className='status-highlighter'>
                    <p>{item.status}</p>
                </div>
            </div>
            <div className='tourCard-Property'>
                <div className='tourCard-content'>
                    <h3>{item.clientFName} {item.clientLName}</h3>
                    <p><span  className='iconStyle'><FontAwesomeIcon icon={faEnvelope} /></span> {item.clientEmail}</p>
                    <p><span  className='iconStyle'><FontAwesomeIcon icon={faPhone} /></span> {item.clientPhone}</p>
                    <p><span  className='iconStyle'><FontAwesomeIcon icon={faLocationArrow} /></span> {item.clientAddress}</p>
                </div>
                <div className='tourCard-member'>
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
        </div>
    );
};

export default DashBoardContentCard;