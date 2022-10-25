import React, { Component } from 'react'
import GCCComponent from './GCCComponent'
import { counterContext } from '../CounterContext/CounterContext';
import './CCComponent.css';

export default class CCComponent extends Component {
  render() {
    return (
      <div className='child-class-center'>
        <h2>Child Class Component</h2>
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


        <hr></hr>
        <GCCComponent />
        <hr></hr>
      </div>
    )
  }
}
