import Login from "./component/login/Login";
import Logout from "./component/logout/Logout";
import Home from "./component/home/Home";


import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Routes>          
          <Route path="/" element={<Login/>} exact />
          <Route path= "/login" element={<Login/>} />
          <Route path= "/logout" element={<Logout/>} />
          <Route path= "/home" element={<Home/>} />
        </Routes>        
      </Router>
    </div>
  );
}

export default App;
