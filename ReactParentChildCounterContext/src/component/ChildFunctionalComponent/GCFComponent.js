import React, { useContext } from 'react'
import './GCFComponent.css';
import {counterContext} from '../CounterContext/CounterContext';

export default function GCFComponent() {
    const {counter,setCounter} = useContext(counterContext);
    return (
        <div className='grand-child-functional-center'>
            <h2>Grand Child Functional Component</h2>
            <h3>{counter}</h3>
            <button onClick={()=>setCounter(counter+1)}>Add to Parent Counter</button>
            <button onClick={()=>setCounter(counter-1)}>Substract From Parent Counter</button>
            <hr></hr>            
        </div>
    )
}
