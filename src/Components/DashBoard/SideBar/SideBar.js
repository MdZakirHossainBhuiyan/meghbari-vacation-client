import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import './SideBar.css';
import { faSuitcaseRolling, faHome, faBusAlt, faRoute, faList, faPenNib, faSignOutAlt, faClipboardCheck, faUserShield, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseConfig from '../../../Pages/Login/firebase.config';

const SideBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleLogout = () => {
        firebase.auth().signOut().then(() => {
            const signedInUser = false;
            setLoggedInUser(signedInUser);
        }).catch((error) => {

        });
    }

    return (
        <section className="dashboard-sidebar">
            <div className="dashboard-sidebar-content">
                <div className="dashboard-sidebar-icon">
                <FontAwesomeIcon icon={faHome} />
                </div>
                <div className="dashboard-sidebar-btn">
                    <Link to="/"><button>Home</button></Link>
                </div>
            </div>
            <div className="dashboard-sidebar-content">
                <div className="dashboard-sidebar-icon">
                <FontAwesomeIcon icon={faChartLine} />
                </div>
                <div className="dashboard-sidebar-btn">
                    <Link to="/dashboard"><button>Dashboard</button></Link>
                </div>
            </div>
            <div className="dashboard-sidebar-content">
                <div className="dashboard-sidebar-icon">
                <FontAwesomeIcon icon={faPenNib} />
                </div>
                <div className="dashboard-sidebar-btn">
                    <Link to="#"><button>Write Review</button></Link>
                </div>
            </div>
            <div className="dashboard-sidebar-content">
                <div className="dashboard-sidebar-icon">
                <FontAwesomeIcon icon={faSuitcaseRolling} />
                </div>
                <div className="dashboard-sidebar-btn">
                    <Link to="/tourRequest"><button>Tour Request</button></Link>
                </div>
            </div>
            <div className="dashboard-sidebar-content">
                <div className="dashboard-sidebar-icon">
                <FontAwesomeIcon icon={faRoute} />
                </div>
                <div className="dashboard-sidebar-btn">
                    <Link to="/newtour"><button>Add New Tour</button></Link>
                </div>
            </div>
            <div className="dashboard-sidebar-content">
                <div className="dashboard-sidebar-icon">
                <FontAwesomeIcon icon={faUserShield} />
                </div>
                <div className="dashboard-sidebar-btn">
                    <Link to="#"><button>Add Admin</button></Link>
                </div>
            </div>
            <div className="dashboard-sidebar-content">
                <div className="dashboard-sidebar-icon">
                <FontAwesomeIcon icon={faList} />
                </div>
                <div className="dashboard-sidebar-btn">
                    <Link to="/tourList"><button>All Tours</button></Link>
                </div>
            </div>

            <div className="dashboard-sidebar-content dashboard-logout">
                <div className="dashboard-sidebar-icon">
                <FontAwesomeIcon icon={faSignOutAlt} />
                </div>
                <div className="dashboard-sidebar-btn">
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </section>
    );
};

export default SideBar;