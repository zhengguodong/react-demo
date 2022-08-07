import axios from "./request"
export const Register=(params)=>{
    return axios({
        method:'post',
        data:params,
        url:'/register'
    })
}
export const LoginpPerson=(params)=>{
    return axios({
        method:'post',
        data:params,
        url:'/login'
    })
}
