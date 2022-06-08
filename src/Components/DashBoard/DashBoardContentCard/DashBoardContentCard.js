import React from 'react';
import './DashBoardContentCard.css';

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
                    <p>{item.clientEmail}</p>
                    <p>{item.clientPhone}</p>
                    <p>{item.clientAddress}</p>
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