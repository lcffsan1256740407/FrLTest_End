import { createRouter , createWebHistory } from "vue-router";


const router = createRouter({
    routes:[
        {
            path:'/',
            redirect:'/Home'
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
            redirect:'/Home/ShowHome',
            component:()=>import('@/layouts/HomePage.vue'),
            children:[
                {
                    name:'ShowHome',
                    path:'ShowHome',
                    component:()=>import('@/pages/showHome/index.vue')
                }
            ]
        }
    ],
    history:createWebHistory()
})

export default router