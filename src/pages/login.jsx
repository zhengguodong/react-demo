import React, { Component } from 'react';
import {Link,useNavigate} from "react-router-dom"
import { Button, Checkbox, Form, Input ,message} from 'antd';
import "../css/login.css"
import {LoginpPerson} from "../api/user"
function Login () {
    let navigate=useNavigate()
    const onFinish = (values) => {
        let params={
            username:values.username,
            password:values.password
        }
        LoginpPerson(params).then(res=>{
            if(res.data.code==="200"){
                message.success('登录成功！');
                navigate("/mine")
                localStorage.setItem("flag","1")
            }else{
                message.error('登录异常！');
            }
        })
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
        return (
            <div className='box'>
                <div className='box_form'>
                    <h1 className='title'>登录</h1>
                    <div className="bb">
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

                            <Form.Item >
                                <Button type="primary" htmlType="submit" className='btn'>
                                    登录
                                </Button>
                                <Link to="/register">☞注册</Link>
                            </Form.Item>
                        </Form>
                    </div>

                </div>

            </div>

        );
    }

export default Login;
