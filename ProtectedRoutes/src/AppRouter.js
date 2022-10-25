import './App.css';

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from "./component/HomeComponent";
import AboutUs from "./component/AboutUsComponent";
import ContactUs from "./component/ContactUsComponent";

import ProtectedRoute from './ProtectedRoute';

function AppRouter(props) {

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/">Home Page</Link>
          </li>
          <li className="nav-item">
            <Link to="/contactus">Contact Us (UnProtected)</Link>
          </li>
          <li className="nav-item">
            <Link to="/aboutus">About Us (Protected)</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contactus" component={ContactUs} />
        <ProtectedRoute path="/aboutus" component={AboutUs} auth={props.statusOfprotectedRoute} />
      </Switch>
    </Router>


  );
}

export default AppRouter;
