import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './router';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux"
import store from "./store"
//引入样式
import 'antd/dist/antd.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
//将全局状态挂载
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

reportWebVitals();
