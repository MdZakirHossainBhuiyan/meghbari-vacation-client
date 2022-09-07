import React, { useContext } from 'react';
import './TopBar.css';
import { faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SideBar from '../SideBar/SideBar';
import { UserContext } from '../../../App';

const TopBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <section className="dashboardTopBar">
            <div className="container dashboardTopBarContain">
                <div className="dashboard-top-bar-heading">
                    <img src={loggedInUser.photoURL} alt="" />
                    <h1><span>Hello,</span><br />{loggedInUser.name}</h1>
                </div>
                <div className="dashboard-top-bar-notification">
                    <div className="dashboard-top-bar-icon">
                        <FontAwesomeIcon icon={faBell} />
                    </div>
                    <div className="dashboard-top-bar-icon">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                </div>
            </div>
            <SideBar />
        </section>
    );
};

export default TopBar;