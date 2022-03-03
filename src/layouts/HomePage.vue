<script setup lang="ts">

</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <!-- 顶部导航 -->
                <TopHeader/>
            </el-header>
            <el-main>
                <!-- 内容页面 -->
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>


<style scoped lang="less">
.common-layout {
    .el-header {
        background-color: #545c64;
        padding: 0;
        padding-right: 55px;
    }
    .el-main {
    background-color: #e9eef3;
    padding: 0;
}
}

</style>