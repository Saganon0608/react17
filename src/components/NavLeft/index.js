import React, { Component } from 'react'
import { Menu } from 'antd';
import './index.less'
import MenuConfig from '../../config/menuConfig';
import {NavLink} from 'react-router-dom';

const SubMenu = Menu.SubMenu;

export default class index extends Component {
  componentWillMount(){
     const menuTreeNode = this.renderMenu(MenuConfig)
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
      return <Menu.Item key = {item.key}>
        <NavLink to={item.key}>{item.title}</NavLink>      
      </Menu.Item>
    })
  }

  render() {
    return (
      <div className="nav-left">
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
