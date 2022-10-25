import React, {useState} from 'react';



import './PFComponent.css';
import CFComponent from '../ChildFunctionalComponent/CFComponent';
import CCComponent from '../ChildClassComponent/CCComponent';
import {counterContext} from '../CounterContext/CounterContext';

export default function PFComponent() {

  const [counter, setCounter] = useState(0);
  

  const increment = () => {
    setCounter(counter+1);
  }

  const decrement = () => {
    setCounter(counter-1);
  }

  return (
    <div className="container container-table border border-dark">
      <hr></hr> 
      <div className='parent-center'>
        <h2>Parent Component</h2>
         <h3>{counter}</h3>
         <button onClick={increment}>Add to Parent Counter</button>
         <button onClick={decrement}>Substract From Parent Counter</button>
         <hr></hr> 
      </div> 
      <hr></hr> 
      <counterContext.Provider value={{counter, setCounter}}>
        <CFComponent /> 
      </counterContext.Provider>       
      <hr></hr> 
      <counterContext.Provider value={{counter, setCounter}}>
        <CCComponent  /> 
      </counterContext.Provider>
       
      <hr></hr>    
    </div>
  )
}
