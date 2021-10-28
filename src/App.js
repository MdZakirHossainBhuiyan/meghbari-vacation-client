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

function App() {
  return (
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
          <Route exact path="/booking">
            <BookingTour />
          </Route>
          <Route path="/booking/inquiry">
            <BookingTourInquiryForm />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
