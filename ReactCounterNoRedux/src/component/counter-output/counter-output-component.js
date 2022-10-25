import './counter-output-component.css';

function CounterOutput(props) {
  return (    
    <div> 
          <h5>Counter is {props.xcounter}</h5>     
    </div>  
  );
}

export default CounterOutput;
