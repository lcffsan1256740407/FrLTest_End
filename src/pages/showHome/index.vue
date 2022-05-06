<script setup lang="ts">
import QuickServiceVue from './components/QuickService.vue';
import Sign from './components/Sign.vue';
import DataView from './components/DataView.vue';
import UtoolsView from './components/UtoolsView.vue';
import Other from './components/Other.vue';
import TestInfo from './components/TestInfo.vue';
</script>

<template>
    <div id="showHome">
        <!-- 快捷服务 -->
        <div style="width:49%">
            <QuickServiceVue />
        </div>
        <!-- 公告 -->
        <div style="width:49%">
            <Sign />
        </div>
        <!-- 数据概览 -->
        <div style="width:100%">
            <DataView />
        </div>
        <!-- 工具 -->
        <!-- <div style="width:100%">
            <UtoolsView />
        </div> -->
        <!-- 考试相关信息 -->
        <!-- <div style="width:100%">
            <TestInfo />
        </div> -->
        <!-- 运营路径 -->
        <div style="width:100%">
            <Other />
        </div>
    </div>
</template>

<style scoped lang="less">
#showHome {
    padding: 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-around;
    > div {
        margin: 4px 0;
        &:deep(.el-card__header) {
            font-size: 16px;
            font-weight: 500;
        }
        &:deep(.el-card__body) {
            padding: 0px;
        }
    }
}
</style>