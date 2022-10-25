import React, { Component } from 'react'

export default class AboutUsComponent extends Component {

  constructor(props) {
    super(props);
    console.log('AboutUs Component Loaded');
  }

  render() {
    return (
      <div className="ui container center">
        <div className="aboutus-profile">
          <div className="ui message info">
              <h3>You are now on About Us page </h3>
          </div>
        </div>
      </div>
    )
  }
}

