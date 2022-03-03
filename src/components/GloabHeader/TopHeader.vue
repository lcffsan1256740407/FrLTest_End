<template>
    <div id="header">
        <div class="header-left">
            <img src="@/assets/headerImgs/logo.png" />
            <span>外语考试报名管理平台</span>
            <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                active-text-color="#ffd04b"
                background-color="#545c64"
                text-color="#fff"
                router
                mode="horizontal"
                :ellipsis="false"
            >
                <el-menu-item index="/Home/ShowHome">首页</el-menu-item>
                <el-menu-item index="/Home/ExamCtrol/welcome">考生管理</el-menu-item>
                <el-menu-item index="3">审核中心</el-menu-item>
                <el-menu-item index="4">本地生活圈</el-menu-item>
            </el-menu>
        </div>
        <RightHeader />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const activeIndex = ref('')    //默认选中的页签

// 刷新页面防止el-menu-item选择状态丢失
onMounted(() => {
    console.log('Header组件被重新挂载')
    activeIndex.value = window.location.pathname
})
</script>

<style scoped lang="less">
#header {
    display: flex;
    justify-content: space-between;
    .header-left {
        display: flex;
        align-items: center;
        > img {
            height: 56px;
        }
        > span {
            font-size: 16px;
            color: white;
            margin: 0 55px 0 5px;
        }
    }
}
</style>