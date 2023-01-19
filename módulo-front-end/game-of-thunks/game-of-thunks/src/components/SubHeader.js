import React, { Component } from 'react'
import logo from '../images/logo.png'

export default class SubHeader extends Component {
  render() {
    return (
      <div id="sub-header">
        <img id="logo" src={logo} />
      </div>
    )
  }
}
