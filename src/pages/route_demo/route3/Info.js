import React, { Component } from 'react'

export default class Info extends Component {
  render() {
    return (
      <div>
        this is info {this.props.match.params.mainId}
      </div>
    )
  }
}
