import React, { Component } from 'react'
import { Card, Button, Modal } from 'antd';
import './ui.less'

export default class modals extends Component {

    state={
        visible:false
    }

    handleOpen = () => {
       this.setState({
           visible:true
       })
    }

    render () {
        return (
            <div>
                <Card title="基础模态框" className={"card-wrap"}>
                    <Button type="primary" onClick={()=>this.handleOpen('shouModal1')}>Open</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('shouModal1')}>自定义页脚</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('shouModal1')}>top20px</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('shouModal1')}>水平垂直</Button>
                </Card>
                <Modal
                    title="React"
                    visible={this.state.visible}
                    onOk={()=>{
                      
                    }}
                    onCancel={() => {
                        return
                    }}
                >
                    123
                </Modal>
            </div>
        )
    }
}
