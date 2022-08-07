
import './App.css';
import {connect} from "react-redux"
import React, {Component, useState} from "react";
import {Outlet,Link} from "react-router-dom"
import "./css/app.css"
import { Button } from 'antd';
import "./css/app.css"
class App extends Component{
    state={
        flag:"0",
    }
    goOut(){
        // history.go(0)
        localStorage.setItem("flag","0")
    }
    componentDidMount() {
        let show=localStorage.getItem("flag")
        this.setState({
            flag:show
        })
    }

    render(){
      return(
          <div>
              <div className='top' >

                      {
                          this.state.flag!="1"?
                              <div className="title">
                                  <h3 className="top1">学生信息系统</h3>
                              <div>
                           <span className="left_box" >
                        <Link to="/login">登录</Link>
                           </span>
                                  <Link to="/register">注册</Link>
                              </div>
                              </div>
                              :''
                      }


                  {
                      this.state.flag==="1"?
                          <div>
                              <h3 className="left_box">学生信息系统</h3>
                              <Link to="/" className="right_box">
                                  <Button type="link" onClick={this.goOut}>退出</Button>
                              </Link>
                              <Link to="/mine">
                                  <Button type="dashed" ghost>
                                      首页
                                  </Button>
                              </Link>
                              <Link to="/home" className="box1">
                                  {/*<Button type="link">我的</Button>*/}
                                  <Button type="dashed" ghost>
                                      我的
                                  </Button>
                              </Link>

                          </div> :''
                  }
              </div>
              {
                  this.state.flag==="1"?<Outlet></Outlet>:''
              }

          </div>
      )
  }
}
const mapStateToProps=(state)=>{
    return {
        msg:state.msg
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        changeMsg(){
            const action={type:'changMsg',value:'hello'}
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
