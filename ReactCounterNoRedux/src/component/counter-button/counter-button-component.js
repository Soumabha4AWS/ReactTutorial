import './counter-button-component.css';

function CounterButton(props) {
  return (    
    <div> 
            <button className="btn btn-primary" onClick={()=>props.increase()}>Increment</button>&nbsp;
            <button className="btn btn-warning" onClick={()=>props.decrease()}>Decrement</button>&nbsp;
            <button className="btn btn-info" onClick={()=>props.revert()}>Reset</button>
    </div>  
  );
}

export default CounterButton;
