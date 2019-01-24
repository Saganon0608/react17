import React, { Component } from 'react'
import moment from "moment";
import {Card,Form,Button,Radio,Input,Select,DatePicker,TimePicker,Upload,Icon,message,InputNumber,Switch, Checkbox} from 'antd'

export class register extends Component {

    state = {

    }
    handleSubmit = ()=>{
        console.dir('注册')
        const form = this.props.form.getFieldsValue()
        console.log(form)

    }
    handleReset = ()=>{
        console.dir('重置')
        this.props.form.resetFields()
    }
    getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      }
    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, imageUrl => this.setState({
            userImg:imageUrl,
            loading: false,
            }));
        }
    }
  render() {
    const {getFieldDecorator} = this.props.form;
    const formItemLayout ={
        labelCol:{
            xs:24,
            sm:4
        },
        wrapperCol:{
            xs:24,
            sm:12
        }
    }
    const offsetLayout ={
        wrapperCol:{
            xs:24,
            sm:{
                span:12,
                offset:4
            }
        }
    }
    return (
      <div>
          <Card title='注册表单'>
            <Form layout='horizontal'>
                <Form.Item label="用户名" {...formItemLayout}>
                    {
                        getFieldDecorator('userName',{
                            initialValue:'',
                            rules:[
                                {
                                    required:true,
                                    message:'用户名不能为空'
                                }
                            ]
                        })(
                            <Input placeholder='请输入用户名'/>
                        )
                    }
                </Form.Item>
                <Form.Item label="密码" {...formItemLayout}>
                    {
                        getFieldDecorator('pwd',{
                            initialValue:'',
                            rules:[
                                {
                                    required:true,
                                    message:'密码不能为空'
                                }
                            ]
                        })(
                            <Input placeholder='请输入密码' type='password'/>
                        )
                    }
                </Form.Item>
                <Form.Item label="性别" {...formItemLayout}>
                    {
                        getFieldDecorator('sex',{
                            initialValue:'1'
                        })(
                            <Radio.Group>
                                <Radio value='1'>男</Radio>
                                <Radio value='2'>女</Radio>
                            </Radio.Group>
                        )
                    }
                </Form.Item>
                <Form.Item label="年龄" {...formItemLayout}>
                    {
                        getFieldDecorator('age',{
                            initialValue:'1',
                            rules:[
                                {
                                    required:true,
                                    message:'年龄不能为空'
                                }
                            ]
                        })(
                            <InputNumber />
                        )
                    }
                </Form.Item>
                <Form.Item label="当前状态" {...formItemLayout}>
                    {
                        getFieldDecorator('state',{
                            initialValue:'1',
                            rules:[
                                {
                                    required:true,
                                    message:'当前状态不能为空'
                                }
                            ]
                        })(
                            <Select>
                                <Select.Option value = '1'>咸鱼一条</Select.Option>
                                <Select.Option value = '2'>咸鱼二条</Select.Option>
                                <Select.Option value = '3'>咸鱼三条</Select.Option>
                                <Select.Option value = '4'>咸鱼四条</Select.Option>
                            </Select>
                        )
                    }
                </Form.Item>
                <Form.Item label="爱好" {...formItemLayout}>
                    {
                        getFieldDecorator('interest',{
                            initialValue:['1','2','3'],
                            rules:[
                                {
                                    required:true,
                                    message:'当前状态不能为空'
                                }
                            ]
                        })(
                            <Select mode="multiple">
                                <Select.Option value = '1'>咸鱼一条</Select.Option>
                                <Select.Option value = '2'>咸鱼二条</Select.Option>
                                <Select.Option value = '3'>咸鱼三条</Select.Option>
                                <Select.Option value = '4'>咸鱼四条</Select.Option>
                            </Select>
                        )
                    }
                </Form.Item>
                <Form.Item label="是否已婚" {...formItemLayout}>
                    {
                        getFieldDecorator('isMarried',{
                            valuePropName:'checked',
                            initialValue:true
                        })(
                            <Switch/>
                        )
                    }
                </Form.Item>
                <Form.Item label="生日" {...formItemLayout}>
                    {
                        getFieldDecorator('birthday',{
                            initialValue:moment('2018-08-08')
                        })(
                            <DatePicker                                  
                            //format='YYYY-MM-DD'
                            />
                        )
                    }
                </Form.Item>
                <Form.Item label="生日" {...formItemLayout}>
                    {
                        getFieldDecorator('birthday',{
                            initialValue:moment('2018-08-08')
                        })(
                            <DatePicker                                  
                            //format='YYYY-MM-DD'
                            />
                        )
                    }
                </Form.Item>

                <Form.Item label="联系地址" {...formItemLayout}>
                    {
                        getFieldDecorator('address',{
                            initialValue:'北京市朝阳区'
                        })(
                            <Input.TextArea
                            autosize = {{
                                minRows:2,
                                maxRows:6
                            }}
                            />
                        )
                    }
                </Form.Item>
                <Form.Item label="早起时间" {...formItemLayout}>
                    {
                        getFieldDecorator('time',{
                            initialValue:moment()
                        })(
                            <TimePicker/>
                        )
                    }
                </Form.Item>
                <Form.Item label="头像" {...formItemLayout}>
                    {
                        getFieldDecorator('userImg',{
                        })(
                            <Upload
                            listType="picture-card"
                            showUploadList={false}
                            action="//jsonplaceholder.typicode.com/posts/"
                            onChange={this.handleChange}
                            >
                            {this.state.userImg?<img src={this.state.userImg}/>:<Icon type="plus"/>}
                            </Upload>
                        )
                    }
                </Form.Item>
                <Form.Item  {...offsetLayout}>
                    {
                        getFieldDecorator('agree',{
                        })(
                            <Checkbox>我已经阅读过协议</Checkbox>
                        )
                    }
                </Form.Item>
                <Form.Item  {...offsetLayout}>
                    <Button type='primary' onClick={this.handleSubmit.bind(this)}>注册</Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button type='primary' onClick={this.handleReset.bind(this)}>重置</Button>
                </Form.Item>                
            </Form>
          </Card>        
      </div>
    )
  }
}

export default Form.create()(register)
