import React, { Component } from 'react'

export default class ContactUsComponent extends Component {

  constructor(props) {
    super(props);    
    console.log('ContactUs Component Loaded');
  }

  render() {
    return (
      <div className="ui container center">
          <div className="contactus-profile">
              <div className="ui message info">
                  <h3>You are now on Conact Us page</h3>
              </div>
          </div>
      </div>
    )
  }
}


