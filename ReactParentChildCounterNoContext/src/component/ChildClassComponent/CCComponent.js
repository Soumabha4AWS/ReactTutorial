import React, { Component } from 'react'
import GCCComponent from './GCCComponent'
import './CCComponent.css';

export default class CCComponent extends Component {
  render() {
    return (
        <div className='child-class-center'>
        <h2>Child Class Component</h2>
        <h3>{this.props.counterForClassChild}</h3>
        <hr></hr>
        <button onClick={this.props.incrementForClassChild}>Add to Parent Counter</button>
        <button onClick={this.props.decrementForClassChild}>Substract From Parent Counter</button>
        <hr></hr>
        <GCCComponent counterForClassGrandChild = {this.props.counterForClassChild} incrementForClassGrandChild = {this.props.incrementForClassChild} decrementForClassGrandChild = {this.props.decrementForClassChild}/>            
    </div>
    )
  }
}
