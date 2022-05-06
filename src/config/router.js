import { createRouter, createWebHistory } from "vue-router";
import adminlist from '@/pages/examCtrol/adminlist/index.vue'

const router = createRouter({
    routes: [
        {
            path: '/',
            // redirect: '/Login'
            redirect: '/Home'
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
                    // 考生管理
                    name: 'ExamCtrol',
                    path: 'ExamCtrol',
                    redirect: '/Home/ExamCtrol/welcome',
                    component: () => import('@/layouts/ExamCtrolPage.vue'),
                    children: [
                        {
                            // 欢迎使用考试报名平台展示
                            name: 'Welcome',
                            path: '/Home/ExamCtrol/welcome',
                            component: () => import('@/pages/examCtrol/Welcome.vue')
                        },
                        {
                            // 报考列表
                            name: 'ExamInfoList',
                            path: '/Home/ExamCtrol/examinfolist',
                            component: () => import('@/pages/examCtrol/examinfolist/index.vue')
                        },
                        {
                            // 准考证管理
                            path: '/Home/ExamCtrol/ticket',
                            component: () => import('@/pages/examCtrol/ticket/index.vue')
                        },
                        {
                            // 成绩录入
                            path: '/Home/ExamCtrol/roomNumber',
                            component: () => import('@/pages/examCtrol/roomnumber/index.vue')
                        },
                        {
                            // 考生信息报表
                            path: '/Home/ExamCtrol/studentlist',
                            component: () => import('@/pages/examCtrol/studentlist/index.vue')
                        }
                    ]
                },
                {
                    // 考场管理
                    name: 'RoomCtrol',
                    path: 'RoomCtrol',
                    redirect: '/Home/ExamCtrol/roomNumber',
                    component: () => import('@/layouts/ExamCtrolPage.vue'),
                    children: [
                        {
                            // 考场列表
                            path: '/Home/ExamCtrol/roomNumber',
                            component: () => import('@/pages/examCtrol/roomnumber/index.vue')
                        },
                        {
                            // 考场资源分配
                            path: '/Home/ExamCtrol/roomAllot',
                            component: () => import('@/pages/examCtrol/studentlist/index.vue')
                        }
                    ]
                },
                {
                    // 管理员模块
                    name: 'adminCtrol',
                    path: 'adminCtrol',
                    redirect: '/Home/ExamCtrol/adminlist',
                    component: () => import('@/layouts/ExamCtrolPage.vue'),
                    children: [
                        {
                            // 管理列表
                            path: '/Home/ExamCtrol/adminlist',
                            component: adminlist
                        },
                        {
                            // 权限码生成
                            path: '/Home/ExamCtrol/roomAllot',
                            component: () => import('@/pages/examCtrol/studentlist/index.vue')
                        },
                        {
                            // 账号审批
                            path: '/Home/ExamCtrol/roomNumber',
                            component: () => import('@/pages/examCtrol/roomnumber/index.vue')
                        },
                        {
                            // 消息发布
                            path: '/Home/ExamCtrol/messageSend',
                            component: () => import('@/pages/examCtrol/messagesend/index.vue')
                        }
                    ]
                }
            ]
        }
    ],
    history: createWebHistory()
})

export default router