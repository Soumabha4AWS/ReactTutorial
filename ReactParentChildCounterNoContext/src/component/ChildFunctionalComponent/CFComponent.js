import React from 'react'
import GCFComponent from './GCFComponent';
import './CFComponent.css';


export default function CFComponent(props) {
    return (
        <div className='child-functional-center'>
            <h2>Child Functional Component</h2>
            <h3>{props.counterForFunctionalChild}</h3>
            <button onClick={props.incrementForFunctionalChild}>Add to Parent Counter</button>
            <button onClick={props.decrementForFunctionalChild}>Substract From Parent Counter</button>
            <hr></hr>
            <GCFComponent counterForFunctionalGrandChild={props.counterForFunctionalChild} incrementForFunctionalGrandChild={props.incrementForFunctionalChild} decrementForFunctionalGrandChild={props.decrementForFunctionalChild}/>
            <hr></hr>
        </div>
    )
}
