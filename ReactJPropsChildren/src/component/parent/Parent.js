import React, { Component } from 'react'
import Child from '../child/Child'

export default class Parent extends Component {

  render() {

    const valueArray = {name: 'abc',email: ['1','2','3'] };

    return (
        <div>
          Parent Page
          <Child {...valueArray} />
        </div>
        
    )
  }

}
