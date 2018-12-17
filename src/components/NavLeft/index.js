import React, { Component } from 'react'
import MenuConfig from '../../config/menuConfig'
import { Menu, Icon } from 'antd';
import './index.less'
import menuConfig from '../../config/menuConfig';

const SubMenu = Menu.SubMenu;

export default class index extends Component {
  componentWillMount(){
     const menuTreeNode = this.renderMenu(menuConfig)
     this.setState({
       menuTreeNode
     })
  }

  //菜单渲染
  renderMenu = (data)=>{
    return data.map((item)=>{
      if(item.children){
        return (
          <SubMenu title = {item.title} key = {item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item key = {item.key}>{item.title} </Menu.Item>
    })
  }

  render() {
    return (
      <div>
        <div className='logo'>
          <img src="/assets/logo-ant.svg" alt =""/>
          <h1>Imooc MS</h1>
        </div>
        <Menu theme="dark">
          {this.state.menuTreeNode}
        </Menu>
  
      </div>
    )
  }
}
