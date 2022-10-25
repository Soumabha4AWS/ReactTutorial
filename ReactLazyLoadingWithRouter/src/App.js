import './App.css';
import AppRouter from './AppRouter';

import { BrowserRouter as Router, Link } from "react-router-dom"; 

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3>Lazy Loading With Router</h3>
        </div>
        <Router>
          <nav>
            <ul>          
                <li><Link to="/aboutus">About Us</Link></li>
                <li><Link to="/contactus">Contact Us</Link></li>          
            </ul>         
          </nav>        
          <AppRouter  />
        </Router>
      </div>
    </div>
  );
}

export default App;
