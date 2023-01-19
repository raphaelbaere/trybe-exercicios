import React, { Component } from 'react'

export default class CharInput extends Component {
  render() {
    return (
      <div>
        <h2 id="input-title">What is the character of the day?</h2>
        <input id="char-input" type="text" />
      </div>
    )
  }
}
