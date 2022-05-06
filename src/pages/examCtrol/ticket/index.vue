<template>
    <el-card class="main">
        <template #header>
            <div class="headerNames">准考证板块</div>
        </template>

        <el-tabs v-model="activeName" type="card" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="已分配准考证号" name="first">
                <First/>
            </el-tab-pane>
            <el-tab-pane label="未分配准考证号" name="second">
                <Second/>
            </el-tab-pane>
        </el-tabs>
    </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import First from "./First.vue";
import Pagination from "../../../components/Pagination/index.vue";
import Second from "./Second.vue";

// 选中的标签页名
const activeName = ref('first')

// 点击切换标签名
const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}

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