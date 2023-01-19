import React, { Component } from 'react';
import { connect } from 'react-redux'

class CharFound extends Component {
  render() {
    const { character } = this.props;
    return (
      <p>{character}</p>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        character: state.GOTReducer.character,
    }
}

export default connect(mapStateToProps)(CharFound);
