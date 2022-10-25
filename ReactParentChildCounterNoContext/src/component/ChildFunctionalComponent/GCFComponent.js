import React from 'react';
import './GCFComponent.css';

export default function GCFComponent(props) {
    return (
        <div className='grand-child-functional-center'>
            <h2>Grand Child Functional Component</h2>
            <h3>{props.counterForFunctionalGrandChild}</h3>
            <button onClick={props.incrementForFunctionalGrandChild}>Add to Parent Counter</button>
            <button onClick={props.decrementForFunctionalGrandChild}>Substract From Parent Counter</button>
            <hr></hr>            
        </div>
    )
}
