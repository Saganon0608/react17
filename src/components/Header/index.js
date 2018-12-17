import React, { Component } from 'react'
import {Row, Col} from 'antd'
import './index.less'

export default class index extends Component {
  render() {
    return (
      <div className="header">
        <Row className="header-top">
            <Col span="24">
              <span>欢迎，{'橙子十七'}</span>
              <a href="#">退出</a>
            </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span="4">首页</Col>
          <Col span="20" className="weather">
            <span className="date">{'2018-01-01'}</span>
            <span className="weather-detail">{'晴转多云'}</span>
          </Col>
        </Row>
      </div>
    )
  }
}
