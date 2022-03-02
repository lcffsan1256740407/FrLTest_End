<template>
    <div id="header">
        <div class="header-left">
            <img src="@/assets/headerImgs/logo.png" alt="">
            <span>外语考试报名管理平台</span>
            <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"   
                :ellipsis="false"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
            >
                <el-menu-item index="1">首页</el-menu-item>
                <el-menu-item index="2">管理中心</el-menu-item>
                <el-menu-item index="3">审核中心</el-menu-item>
                <el-menu-item index="4">本地生活圈</el-menu-item>
            </el-menu>
        </div>
        <RightHeader />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const activeIndex = ref('1')    //选中的页签


</script>

<style scoped lang="less">
#header {
    display: flex;
    justify-content: space-between;
    .header-left{
        display: flex;
        align-items: center;
        > img{
            height: 56px;
        }
        > span{
            font-size: 16px;
            color: white;
            margin: 0 55px 0 5px;
        }
    }
}
</style>