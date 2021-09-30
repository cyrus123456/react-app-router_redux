import React, { Component } from 'react'
import queryString from 'query-string';

export default class More extends Component {
  render() {
    console.log('this.props.location.state :>> ', this.props.location.state);
    console.log('queryString.parse(this.props.location.search) :>> ', queryString.parse(this.props.location.search));
    let id, id2
    if (this.props.location.state) {

      id = this.props.location.state.id
      id2 = this.props.location.state.id2
    } else {

      id = queryString.parse(this.props.location.search).id
      id2 = queryString.parse(this.props.location.search).id2
    }
    return (
      <div>
        <h1>More页面</h1>
        <h2>
          id={id},id2={id2}
        </h2>

      </div>
    )
  }
}
