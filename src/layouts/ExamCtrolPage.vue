<script setup lang="ts">
import ExamMenu from '@/components/ExamCtrolMenu/ExamMenu.vue';

</script>

<template>
    <!-- 考生管理布局页面 -->
    <div id="menuLayout">
        <el-container>
            <!-- 侧边栏导航 -->
            <el-aside>
                <ExamMenu />
            </el-aside>
            <!-- 主体内容 -->
            <el-main>
                <div id="mainContext">
                    <router-view></router-view>
                </div>
            </el-main>
        </el-container>
    </div>
</template>


<style scoped lang="less">
#menuLayout {
    .el-aside{
        width: 225px;
        // 菜单栏样式
        .el-menu.el-menu-vertical-demo{
            width: 100%;
            height: 94vh;
        }
        // background-color: rgb(84,92,100);
    }
    #mainContext {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: white;
    }
}
</style>