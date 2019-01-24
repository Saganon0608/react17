import React, { Component } from 'react'
import { Card,Table,Spin } from "antd";
import axios from "../../utils/axios";

export class basicTable extends Component {  
  state = {

  }

  componentDidMount(){
    const data = [
      {
        id:'0',
        userName:'Jack',
        sex:'1',
        state:'1',
        interest:'1',
        birthday:'1985-06-08',
        address:'北京市朝阳区',
        time:'09:00'
      },
      {
        id:'1',
        userName:'Jack',
        sex:'1',
        state:'1',
        interest:'1',
        birthday:'1985-06-08',
        address:'北京市朝阳区',
        time:'09:00'
      },
      {
        id:'2',
        userName:'Jack',
        sex:'1',
        state:'1',
        interest:'1',
        birthday:'1985-06-08',
        address:'北京市朝阳区',
        time:'09:00'
      }
    ]
    this.setState({
      dataSource:data
    })

    this.request()

  
  }

  request = ()=>{
    axios.ajax({
      url:'/basic_table/list',
      data:{
        params:{
          page:1
        }
      }
    }).then(res=>{
      if(res.success){
        this.setState({
          dataSource2:res.data
        })
      }
    })
   
  }

  render() {

    const columns = [
      {
        title:'id',
        dataIndex:'id'
      },
      {
        title:'用户名',
        dataIndex:'userName'
      },
      {
        title:'性别',
        dataIndex:'sex',
        render(item){
          return item==='1'?'男':'女'
        }
      },
      {
        title:'状态',
        dataIndex:'state',
        render(item){
          let conf = ['状态1','状态2','状态3','状态4','状态5','状态6']
          return conf[item]
        }
      },
      {
        title:'爱好',
        dataIndex:'interest',
        render(item){
          let conf = ['篮球','游泳','乒乓','游戏','美女','唱歌']
          return conf[item]
        }
      },
      {
        title:'生日',
        dataIndex:'birthday'
      },
      {
        title:'地址',
        dataIndex:'address'
      },
      {
        title:'起床时间',
        dataIndex:'time'
      }
    ]

    return (
      <div>
        <Card title = "基础表格">
          <Table
            bordered
            pagination={false}
            dataSource={this.state.dataSource}
            columns={columns}
          />
        </Card>
        <Card title = "动态数据渲染表格-Mock" style={{margin:'10px 0px'}}>
          <Table
            bordered
            pagination={false}
            dataSource={this.state.dataSource2}
            columns={columns}
          />
        </Card>
        <Card title = "动态数据渲染表格-单选-Mock" style={{margin:'10px 0px'}}>
          <Table
            bordered
            pagination={false}
            dataSource={this.state.dataSource2}
            columns={columns}
          />
        </Card>
      </div>
    )
  }
}

export default basicTable
