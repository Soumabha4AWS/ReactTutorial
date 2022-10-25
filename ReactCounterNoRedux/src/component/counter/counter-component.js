import './counter-component.css';
import CounterOutput from '../counter-output/counter-output-component';
import CounterButton from '../counter-button/counter-button-component';
import React, { useState } from 'react';


function Counter() {

    let [counter, setCounter] = useState(0);

    const onIncrement = () => {
        setCounter(counter++);
      }

    const onDecrement = () => {
        setCounter(counter--);
      }
      
    const onReset = () => {
        setCounter(0);
      }    

    return (    
    <div className="row"> 
        <div className="col-md-12">
            <div className="my-3">
                <CounterOutput xcounter={counter}/>
            </div>
            <div className="my-3">
                <CounterButton increase={onIncrement} decrease={onDecrement} revert={onReset}/>
            </div>
        </div>          
    </div>
  );
}

export default Counter;
