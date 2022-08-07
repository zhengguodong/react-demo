import axios from "./request"
export const getList=(params)=>{
    return axios({
        method:'post',
        data:params,
        url:'/getList'
    })
}
export const add=(params)=>{
    return axios({
        method:'post',
        data:params,
        url:'/addThings'
    })
}
export const edit=(params)=>{
    return axios({
        method:'post',
        data:params,
        url:'/editThings'
    })
}
export const delete1=(params)=>{
    return axios({
        method:'post',
        data:params,
        url:'/delThings'
    })
}
