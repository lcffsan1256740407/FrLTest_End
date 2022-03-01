import {Service} from '@/utils/axios'

// 登录请求
export let loginRequest = data => {
    return Service({
        url:'/jx3/login',
        method:'post',
        params:{
            ...data
        }
    })
}