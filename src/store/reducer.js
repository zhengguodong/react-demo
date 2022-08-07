// 定义一个默认状态

const defaultState={
    msg:'nihaop'
}
//导出一个函数
export default(state=defaultState,action)=>{
    let newMsg=JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case "changMsg":
            state.msg=action.value;
            break;
        default:
            break;
    }
    return newMsg;
}
