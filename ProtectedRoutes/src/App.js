import './App.css';

import React, { useState } from "react"
import { useHistory } from "react-router-dom";



import AppRouter from './AppRouter';

function App() {

  const [protectedRouteStatus, setProtectedRouteStatus] = useState(false);
  const history = useHistory();

  const loggedIn = () => {
    setProtectedRouteStatus(true);
  };

  const loggedOut = () => {
    console.log('loggedOut');
    history.push('/');
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="my-6">
          Protected Routes
        </div>
        <div className="my-12 btn-group">
          <button type="button" className="btn btn-success btn-default" onClick={loggedIn}>LogIn</button>
          <button type="button" className="btn btn-danger btn-default" onClick={loggedOut}>LogOut</button>
        </div>
        <AppRouter statusOfprotectedRoute={protectedRouteStatus} />
      </div>
    </div>
  );
}

export default App;
