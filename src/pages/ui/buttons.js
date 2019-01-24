import React, { Component } from 'react'
import {Card,Button,Radio} from 'antd';
import './ui.less'
export default class buttons extends Component {
  state ={
    loadingText:'关闭',
    loading:true,
    btnSize:'default'
  }
  handleCloseLoading=()=>{
    this.setState({
      loadingText:this.state.loadingText === "加载"?"关闭":"加载",
      loading:!this.state.loading
    })
  }

  handleOnchange = (e)=>{
    this.setState({
      btnSize:e.target.value
    })
  }
  
  render() {
    return (
      <div>
        <Card title="基础按钮" className={'card-wrap'}>
          <Button  type="primary">按钮</Button>
          <Button>按钮</Button>
          <Button type="dashed">按钮</Button>
          <Button type="danger">按钮</Button>
          <Button disabled>按钮</Button>
        </Card>
        <Card title="图形按钮" className={'card-warp'}>
          <Button icon="plus" >创建</Button>
          <Button icon="eidt">编辑</Button>
          <Button icon="delete">删除</Button>
          <Button shape="circle" icon="search"></Button>
          <Button type="primary" icon="search">搜索</Button>
          <Button type="primary" icon="download">下载</Button>
        </Card>
        <Card title="Loading按钮" className={'card-warp'}>
          <Button type="primary" loading={this.state.loading}>确定</Button>
          <Button type="primary" shape='circle' loading={this.state.loading}></Button>
          <Button loading={this.state.loading}>点击记载</Button>
          <Button shape="circle" loading={this.state.loading}></Button>
          <Button type="primary" onClick={this.handleCloseLoading}>{this.state.loadingText}</Button>
        </Card>
        <Card title="按钮组">
          <Button.Group>
            <Button type="primary" icon="left">返回</Button>
            <Button type="primary" icon="right">前进</Button>
          </Button.Group>
        </Card>
        <Card title="按钮尺寸" className={'card-warp'}>
          <Radio.Group value={this.state.btnSize} onChange={this.handleOnchange}>
            <Radio value="small">小</Radio>
            <Radio value="default">中</Radio>
            <Radio value="large">大</Radio>
          </Radio.Group>
          <Button  type="primary" size={this.state.btnSize}>按钮</Button>
          <Button size={this.state.btnSize}>按钮</Button>
          <Button type="dashed" size={this.state.btnSize}>按钮</Button>
          <Button type="danger" size={this.state.btnSize}>按钮</Button>
          <Button disabled size={this.state.btnSize}>按钮</Button>
        </Card>
      </div>
    )
  }
}
