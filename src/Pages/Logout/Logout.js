import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const Logout = () => {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });

    return (
        <>
            
        </>
    );
};

export default Logout;