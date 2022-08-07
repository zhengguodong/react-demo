import App from "../App"
import Login from "../pages/login"
import Register from "../pages/register"
import Mine from "../pages/mine"
import Home from "../pages/home"
import React, { Component } from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
const BaseRouter=()=>(
    <BrowserRouter>
        <Routes>
            {/*路由嵌套*/}
            <Route path='/' element={<App/>}>
                <Route path='/Mine' element={<Mine/>}></Route>
                <Route path='/Home' element={<Home/>}></Route>
            </Route>
            <Route path='/Login' element={<Login/>}></Route>
            <Route path='/Register' element={<Register/>}></Route>
        </Routes>
    </BrowserRouter>
)
export default BaseRouter;
