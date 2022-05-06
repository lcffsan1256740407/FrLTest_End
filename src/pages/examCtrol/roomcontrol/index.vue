<template>
    <el-card class="main">
        <template #header>
            <div class="headerNames">考场分配</div>
        </template>

        <Tables />
        <Pagination />
    </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Tables from './Tables.vue'
import type { TabsPaneContext } from 'element-plus'


</script>

<style scoped lang="less">
.main {
    width: 100%;
    height: 100%;
    .headerNames {
        font-size: 20px;
    }
    .search {
        margin-bottom: 35px;
    }
}
</style>