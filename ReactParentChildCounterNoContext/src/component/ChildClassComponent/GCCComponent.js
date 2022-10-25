import React, { Component } from 'react'
import './GCCComponent.css';

export default class GCCComponent extends Component {
  render() {
    return (
        <div className='grand-child-class-center'>
        <h2>Grand Child Class Component</h2>
        <h3>{this.props.counterForClassGrandChild}</h3>
        <hr></hr>
        <button onClick={this.props.incrementForClassGrandChild}>Add to Parent Counter</button>
        <button onClick={this.props.decrementForClassGrandChild}>Substract From Parent Counter</button>            
    </div>
    )
  }
}
