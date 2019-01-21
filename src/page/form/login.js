import React, { Component } from 'react'
import { Card, Form, Input, Button,message, Icon, Checkbox } from 'antd';
import './form.less'



export class login extends Component {

    handleSubmit = ()=>{
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err,values)=>{
            if(!err){
                message.success(`账号：${userInfo.userName},密码：${userInfo.pwd}`)
            }
        })
    }
    render () {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className={'card-wrap'}>
                <Card title='登录行内表单'>
                    <Form layout = 'inline'>
                        <Form.Item>
                            <Input placeholder='请输入用户名'/>
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder='请输入密码'/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary">登录</Button>
                        </Form.Item>
                    </Form>
                </Card>

                <Card title='登录水平表单' style={{marginTop:10}}>
                    <Form style={{width:300}}>
                        <Form.Item>
                            {
                                getFieldDecorator('userName',{
                                    initialValue:'JACK',
                                    rules:[
                                        {
                                            required:true,
                                            message:'用户名不能为空'
                                        },{
                                            min:5,max:10,
                                            message:'长度不在范围内'
                                        },{
                                            //pattern:/^\w+$/g,
                                            pattern: new RegExp('^\\w+$','g'),
                                            message:'用户名必须为字母或者数字'
                                        }
                                    ]
                                })(
                                    <Input placeholder='请输入用户名' prefix={<Icon type="user"/>}/>
                                )
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('pwd',{
                                    initialValue:'123456',
                                    rules:[]
                                })(
                                    <Input placeholder='请输入密码'  prefix={<Icon type="lock"/>}/>
                                )
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('remember',{
                                    valuePropName:'false',
                                    initialValue:true
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )
                            }
                            <a href='/#' style={{float:'right'}}>忘记密码</a>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" onClick={this.handleSubmit.bind(this)} >登录</Button>
                        </Form.Item>
                    </Form>
                </Card>

            </div>
        )
    }
}

export default Form.create()(login)
