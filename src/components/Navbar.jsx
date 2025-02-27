import React, { Component } from 'react'
// import logo from '../logo.svg';
import myLogo  from "../images/chef-hat.png";


export class Navbar extends Component {
  render() {
    return (
        <header className="App-header">
            <nav>
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <img src={myLogo} className="App-logo" alt="logo" />
                <span>Chef Claude</span>
            </nav>
      </header>
    )
  }
}

export default Navbar