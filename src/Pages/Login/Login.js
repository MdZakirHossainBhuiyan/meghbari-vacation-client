import React from 'react';
import './Login.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';



const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase
          .auth()
          .signInWithPopup(provider)
          .then(function (result) {
            console.log(result);
            const { displayName, email, photoURL } = result.user;
            const signedInUser = { name: displayName, email, photoURL };
            setLoggedInUser(signedInUser);
            storeAuthToken();
        })
          .catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    };

    const storeAuthToken = () => {
        firebase
          .auth()
          .currentUser.getIdToken(true)
          .then(function (idToken) {
            sessionStorage.setItem("token", idToken);
            history.replace(from);
        })
          .catch(function (error) {
        });
    };

    return (
        <section className="login-page">
            <h1>Login</h1>
            <button onClick={handleGoogleSignIn}>Login with Google</button>
            <div className="back-home-btn">
              <Link to="/home"><button>Back to Home</button></Link>
            </div>
            
        </section>
    );
};

export default Login;