import React, { Component } from 'react'
import './GCCComponent.css';
import { counterContext } from '../CounterContext/CounterContext';

export default class GCCComponent extends Component {
  render() {
    return (
      <div className='grand-child-class-center'>
        <h2>Grand Child Class Component</h2>
        <counterContext.Consumer>
          {(value) => {
            return (
              <div>
                <h3>{value.counter}</h3>
              </div>
            )
          }}
        </counterContext.Consumer>
        <hr></hr>
        <counterContext.Consumer>
          {(value) => {
            return (
              <div>
                <button onClick={() => value.setCounter(value.counter + 1)}>Add to Parent Counter</button>
                <button onClick={() => value.setCounter(value.counter - 1)}>Substract From Parent Counter</button>
              </div>
            )
          }}
        </counterContext.Consumer>
      </div>
    )
  }
}
