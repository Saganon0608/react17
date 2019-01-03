import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class login extends Component {
  render() {
    return (
      <div>
        登录页 <br/> 
        <Link to="/admin"> 登录 </Link>
      </div>
    )
  }
}
