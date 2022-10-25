import React, { useContext } from 'react'
import GCFComponent from './GCFComponent';
import {counterContext} from '../CounterContext/CounterContext';
import './CFComponent.css';


export default function CFComponent() {
    const {counter,setCounter} = useContext(counterContext);
    return (
        <div className='child-functional-center'>
            <h2>Child Functional Component</h2>
            <h3>{counter}</h3>
            <button onClick={()=>setCounter(counter+1)}>Add to Parent Counter</button>
            <button onClick={()=>setCounter(counter-1)}>Substract From Parent Counter</button>
            <hr></hr>
               <GCFComponent> </GCFComponent>          
            <hr></hr>
        </div>
    )
}
