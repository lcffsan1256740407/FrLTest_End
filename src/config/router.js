import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
    routes: [
        {
            path: '/',
            redirect: '/Login'
        },
        {
            // 登录页面
            name: 'Login',
            path: '/Login',
            component: () => import('@/layouts/LoginPage.vue')
        },
        {
            // 主页
            name: 'Home',
            path: '/Home',
            redirect: '/Home/ShowHome',
            component: () => import('@/layouts/HomePage.vue'),
            children: [
                // 内容页面
                {
                    // 平台首页板块
                    name: 'ShowHome',
                    path: 'ShowHome',
                    component: () => import('@/pages/showHome/index.vue')
                },
                {
                    // 考生管理板块
                    name: 'ExamCtrol',
                    path: 'ExamCtrol',
                    redirect:'/Home/ExamCtrol/welcome',
                    component: () => import('@/layouts/ExamCtrolPage.vue'),
                    children: [
                        {
                            // 欢迎使用考试报名平台展示
                            name: 'Welcome',
                            path: '/Home/ExamCtrol/welcome',
                            component: () => import('@/pages/examCtrol/Welcome.vue')
                        },
                        // 考生信息
                        {
                            // 考生信息记录
                            name: 'ExamInfoList',
                            path: '/Home/ExamCtrol/examinfolist',
                            component: () => import('@/pages/examCtrol/examinfolist/index.vue')
                        }
                    ]
                }
            ]
        }
    ],
    history: createWebHistory()
})

export default router