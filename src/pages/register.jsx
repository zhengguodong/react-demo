import React, { Component } from 'react';
import {Link,useNavigate} from "react-router-dom"
import { Button, Checkbox, Form, Input,message } from 'antd';
import "../css/login.css"
import {Register} from "../api/user"
export default function Register1 () {
    const navigate=useNavigate()
    const onFinish = (values) => {
        let params={
            username:values.username,
            password:values.password
        }
        Register(params).then(res=>{
            if(res.data.code=="200"){
                message.success("注册成功")
                navigate("/login")
            }else{
                message.error("注册异常")
            }
        })
        console.log('Success:', values);
      };

      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
        return (
            <div className='box'>
            <div className='box_form'>
                <h1 className='title'>注册</h1>
                <div className="bbb">
                    <Form
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            labelCol={{ span: 6 }}
                            wrapperCol={{ span: 14 }}
                            label="账号："
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入账号!',
                                },
                            ]}
                        >
                            <Input  placeholder='输入账号' size='large'/>
                        </Form.Item>

                        <Form.Item
                            labelCol={{ span: 6 }}
                            wrapperCol={{ span: 14 }}
                            label="密码："
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入密码!',
                                },
                            ]}
                        >
                            <Input.Password placeholder='输入密码' size='large'/>
                        </Form.Item>
                        <Form.Item
                            labelCol={{ span: 6 }}
                            wrapperCol={{ span: 14 }}
                            label="确认密码："
                            name="confirm"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: '请再次输入密码!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('两次密码不相同!'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password size='large' placeholder='再次输入密码'/>
                        </Form.Item>
                        <Form.Item
                        >
                            <Button type="primary" htmlType="submit" className='btn'>
                                注册
                            </Button>
                            <Link to="/login">☞登录</Link>
                        </Form.Item>
                    </Form>
                </div>

            </div>

        </div>
        );

}
