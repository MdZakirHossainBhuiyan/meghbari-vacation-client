import './App.css';
import Home from './Pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './Pages/About/About';
import OurServiceHome from './Pages/OurService/OurServiceHome';
import Login from './Pages/Login/Login';
import BookingTour from './Pages/BookingTour/BookingTour';
import BookingTourInquiryForm from './Components/BookingTour/BookingTourInquiryForm/BookingTourInquiryForm';
import BookingForm from './Components/DashBoard/BookingForm/BookingForm';
import AddNewTour from './Components/DashBoard/AddNewTour/AddNewTour';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import DashBoard from './Components/DashBoard/DashBoard/DashBoard';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/ourService">
              <OurServiceHome />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/booking/:tourId">
              <BookingTour />
            </Route>
            <PrivateRoute path="/dashboard">
              <DashBoard />
            </PrivateRoute>
            <PrivateRoute exact path="/booking/inquiry">
              <BookingTourInquiryForm />
            </PrivateRoute>
            <PrivateRoute path="/bookingform/:selectedTourId">
              <BookingForm />
            </PrivateRoute>
            <PrivateRoute path="/newtour">
              <AddNewTour />
            </PrivateRoute>
          </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
