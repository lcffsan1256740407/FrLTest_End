import { createRouter , createWebHistory } from "vue-router";


const router = createRouter({
    routes:[
        {
            path:'/',
            redirect:'/Login'
        },
        {
            // 登录页面
            name:'Login',
            path:'/Login',
            component:()=>import('@/layouts/LoginPage.vue')
        },
        {
            // 主页
            name:'Home',
            path:'/Home',
            component:()=>import('@/layouts/HomePage.vue')
        }
    ],
    history:createWebHistory()
})

export default router