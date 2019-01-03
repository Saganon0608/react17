import React, { Component } from 'react'
import {Row,Col} from 'antd'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NavLeft from '../components/NavLeft' 
import Home from './home'
import '../style/common.less'



export default class admin extends Component {
  render() {
    return (
      <Row className="container">
          <Col span="4">  
            <NavLeft></NavLeft>
          </Col>
          <Col span="20" className="main"> 
            <Header></Header>
            <Row className="content">
              {/* <Home/> */}
              {this.props.children}
            </Row>
            <Footer></Footer>
          </Col>
        
      </Row>
    )
  }
}
