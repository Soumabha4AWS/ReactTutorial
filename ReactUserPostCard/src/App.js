import './App.css';
import YoutubeDashboard from './components/layout/dashboard';
import { BrowserRouter , Route , Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>    
    <div className="App">
          <Routes>
             <Route path = "" element = {<YoutubeDashboard />} exact/>             
          </Routes>
    </div>
  </BrowserRouter> 
  );
}

export default App;
