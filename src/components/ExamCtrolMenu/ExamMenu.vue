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
                    <location />
                </el-icon>
                <span>考生信息</span>
            </template>
            <el-menu-item index="/Home/ExamCtrol/examinfolist">信息记录</el-menu-item>
            <el-menu-item index="1-1">区域数据汇总</el-menu-item>
            <el-menu-item index="1-3">暂未开放</el-menu-item>

            <el-sub-menu index="1-4">
                <template #title>人员管理</template>
                <el-menu-item index="1-4-1">日志查看</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
    </el-menu>
</template>

<script lang="ts" setup>

import {
    Location,
} from '@element-plus/icons-vue'

const activeIndex = ref('')
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

onMounted(()=>{
    activeIndex.value = window.location.pathname
})

</script>