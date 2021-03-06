import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App';

const PrivateRoute = ({children, ...rest}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const isLoggedIn = () => {
        const token = sessionStorage.getItem("token");
        if (!token) {
          return false;
        }
        const currentTime = new Date().getTime() / 1000;
      };

    return (
        <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email || isLoggedIn() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;