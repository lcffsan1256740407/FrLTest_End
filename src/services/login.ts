import {Service} from '@/utils/axios'

// 登录请求
export let loginRequest = data => {
    return Service({
        url:'/end/login',
        method:'post',
        params:{
            ...data
        }
    })
}

// 注册请求
export let Register = data => {
    return Service({
        url:'/end/register',
        method:'post',
        params:{
            ...data
        }
    })
}