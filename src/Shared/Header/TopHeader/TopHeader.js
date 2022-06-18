import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcaseRolling, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';
import './TopHeader.css';
import {Link} from "react-router-dom";
import { UserContext } from '../../../App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseConfig from '../../../Pages/Login/firebase.config';

const TopHeader = () => {
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
        <div className="topHeader">
            <div className="container th-container">
                <div className="Heading">
                    <FontAwesomeIcon className="fa-3x icons-design" icon={faSuitcaseRolling} />
                    <p>book your <br />travel</p>
                    <h3>Meghbari</h3>
                </div>
                <div className="contact">
                    <div className="call-us-icon">
                        <FontAwesomeIcon icon={faPhoneAlt} />
                    </div>
                    <div className="call-us-info">
                        <p><small>Call Us: <br /> +880 1675-026895</small></p>
                    </div>
                    <div className="log-btn">
                        {
                            loggedInUser.email ? <button onClick={handleLogout}>Logout</button> : <Link to="/login"><button>Login</button></Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;