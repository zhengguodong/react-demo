import axios from 'axios';

// http request 请求拦截器，有token值则配置上token值
const service = axios.create({
    baseURL: 'http://localhost:4000', // 设置统一的请求前缀
    timeout: 10000, // 设置统一的超时时长

});
service.interceptors.request.use(
    config => {
        let token=sessionStorage.getItem("token")
        if (token!='') {
            config.headers["token"] =token;
            // alert("token")
        }
        // alert("hello")
        return config;
    },
    err => {
        console.log("err")
        return Promise.reject(err);
    });
// http response 服务器响应拦截器，这里拦截401错误，并重新跳入登页重新获取token
service.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      // if (error.response) {
      //   switch (error.response.status) {
      //     case 401:
      //       // 这里写清除token的代码
      //       router.replace({
      //         path: 'login',
      //         query: {redirect: router.currentRoute.fullPath}   //登录成功后跳入浏览的当前页面
      //       })
      //   }
      // }
      return Promise.reject(error.response.data)
    });


export default service;
