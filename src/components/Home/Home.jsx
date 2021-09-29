import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    console.log('this.props.match.params :>> ', this.props.match.params);
    const { id, id2 } = this.props.match.params
    return (
      <div>
        Home
        <div>
          id={id},id2={id2}
        </div>
      </div>

    )
  }
}
