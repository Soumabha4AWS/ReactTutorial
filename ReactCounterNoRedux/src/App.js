import './App.css';
import Counter from './component/counter/counter-component';

function App() {
  return (    
    <div className="row"> 
      <div className="col-md-12">
        <div className="my-3">
            <Counter></Counter>
        </div>
      </div>          
    </div>  
  );
}

export default App;
