import React, { Component } from 'react'
import {Link} from 'react-router-dom';


export default class Main extends Component {
  render() {
    return (
      <div>
        this is Main2
        <br/>
        <Link to="/main/test-id">嵌套路由test-id</Link>
        <br/>
        <Link to="/main/456">嵌套路由456</Link>
        <hr/>
        {this.props.children}
      </div>
    )
  }
}
