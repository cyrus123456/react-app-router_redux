import React, { Component } from 'react'
import HomeCss from './Home.module.css'

export default class Home extends Component {
  render() {
    console.log('this.props.match.params :>> ', this.props.match.params);
    const { id, id2 } = this.props.match.params
    return (
      <div>
        <h1>Home页面</h1>
        <h2>
          id={id},id2={id2}
        </h2>
        <div className={HomeCss.reduxOperation}>
          <div className={HomeCss.reduxOperationChildren}>
            <div className={HomeCss.num}>
              <label htmlFor="selectInput">增量：</label>
              <select className={HomeCss.selectInput} id="selectInput">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="5">5</option>
                <option value="10">10</option>
              </select>
            </div>
            <div>
              <button onClick={()=>this.props.addThing()} >加</button>
              <button>减</button>
              <button>总数为奇数加</button>
              <button>异步增加</button>
            </div>
          </div>

        </div>
      </div>

    )
  }
}
