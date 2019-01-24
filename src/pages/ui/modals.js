import React, { Component } from 'react'
import { Card, Button, Modal } from 'antd';
import './ui.less'

export default class modals extends Component {

    state={
        showModal1:false,
        showModal2:false,
        showModal3:false,
        showModal4:false
    }

    handleOpen = (type) => {
       this.setState({
        [type]:true
       })
    }

    render () {
        return (
            <div>
                <Card title="基础模态框" className={"card-wrap"}>
                    <Button type="primary" onClick={()=>this.handleOpen('showModal1')}>Open</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('showModal2')}>自定义页脚</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('showModal3')}>top20px</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('showModal4')}>水平垂直</Button>
                </Card>
                <Modal
                    title="React"
                    visible={this.state.showModal1}
                    onOk={()=>{
                        this.setState({
                            showModal1:false
                        })
                    }}
                    onCancel={() => {
                        this.setState({
                            showModal1:false
                        })
                    }}
                >
                    111
                </Modal>
                <Modal
                    title="React"
                    visible={this.state.showModal2}
                    onOk={()=>{
                        this.setState({
                            shouModal2:false
                        })
                    }}
                    onCancel={() => {
                        this.setState({
                            showModal2:false
                        })
                    }}
                >
                    222
                </Modal>
                <Modal
                    title="React"
                    visible={this.state.showModal3}
                    onOk={()=>{
                        this.setState({
                            showModal3:false
                        })
                    }}
                    onCancel={() => {
                        this.setState({
                            showModal3:false
                        })
                    }}
                >
                    333
                </Modal>
                <Modal
                    title="React"
                    visible={this.state.showModal4}
                    onOk={()=>{
                        this.setState({
                            showModal4:false
                        })
                    }}
                    onCancel={() => {
                        this.setState({
                            showModal4:false
                        })
                    }}
                >
                    444
                </Modal>
            </div>
        )
    }
}
