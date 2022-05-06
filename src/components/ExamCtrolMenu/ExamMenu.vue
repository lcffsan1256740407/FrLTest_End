<template>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-vertical-demo"
        active-text-color="#ffd04b"
        background-color="#545c64"
        text-color="white"
        @open="handleOpen"
        router
    >
        <el-sub-menu index="1">
            <template #title>
                <el-icon>
                    <Avatar />
                </el-icon>
                <span>考生管理</span>
            </template>
            <el-menu-item index="/Home/ExamCtrol/examinfolist">报考列表</el-menu-item>
            <el-menu-item index="/Home/ExamCtrol/ticket">准考证管理</el-menu-item>
            <el-menu-item index="/Home/ExamCtrol/tickets">成绩录入</el-menu-item>
            <el-menu-item index="/Home/ExamCtrol/studentlist">考生信息报表</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
            <template #title>
                <el-icon>
                    <home-filled />
                </el-icon>
                <span>考场管理</span>
            </template>
            <el-menu-item index="/Home/ExamCtrol/roomNumber">考场列表</el-menu-item>
            <el-menu-item index="/Home/ExamCtrol/roomAllot">考场资源分配</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
            <template #title>
                <el-icon><grid /></el-icon>
                <span>管理员模块</span>
            </template>
            <el-menu-item index="/Home/ExamCtrol/adminlist">管理列表</el-menu-item>
            <el-menu-item index="/Home/ExamCtrol/roomControls">权限码生成</el-menu-item>
            <el-menu-item index="/Home/ExamCtrol/roomControls">账号审批</el-menu-item>
            <el-menu-item index="/Home/ExamCtrol/messageSend">消息发布</el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>

<script lang="ts" setup>

import {
    Avatar,HomeFilled,Grid
} from '@element-plus/icons-vue'

const activeIndex = ref('')
const handleOpen = (key: string, keyPath: string[]) => {

}

onMounted(()=>{
    activeIndex.value = window.location.pathname
})

</script>