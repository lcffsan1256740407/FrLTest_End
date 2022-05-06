import {Service} from '@/utils/axios'

// 查询请求
export let queryList = data => {
    return Service({
        url:'/end/alreadySignUp',
        method:'post',
        params:{
            ...data
        }
    })
}

