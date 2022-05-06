<template>
    <!-- 考生信息报表 -->
    <el-card class="main">
        <template #header>
            <div class="headerNames">考生信息报表</div>
        </template>
        <Search :dataSource='dataSource' :formInline="formInline" @queryDatas='queryDatas' />

        <el-table v-loading="loading" :data="tableData" style="width: 100%;margin-bottom: 20px;min-height: 450px;"
            table-layout="fixed" border :header-cell-style="{ background: '#dae7fa', color: '#606266' }"
            :header-row-style="{ height: '50px' }" :row-style="{ height: '50px' }" :stripe="true"
            :cell-style="changeCellStyle">
            <el-table-column prop="name" label="姓名" align="center" />
            <el-table-column prop="code" label="证件账号" align="center" width="150px" :show-overflow-tooltip="true">
                <template #default="scope">
                    <span>{{ scope.row.code ? scope.row.code : '/' }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="phone" label="手机号" align="center" />
            <el-table-column prop="createDate" label="出生日期" align="center" />
            <el-table-column label="性别" align="center">
                <template #default="{ row }">
                    <span>{{ row.sex === '0' ? '女' : '男' }}</span>
                </template>
            </el-table-column>
        </el-table>

        <Pagination :total='total' :pagerInfo='pagerInfo' @queryDatas='queryDatas' />

    </el-card>
</template>

<script lang="ts" setup>
import moment from 'moment'
import { queryList } from '@/services/examinfolist'
import Search from "@/components/Searchs/search.vue";
import { ref } from 'vue'
import Pagination from "../../../components/Pagination/index.vue";
const loading = ref(false)
const tableData = ref([
    {name:'秋田',code:'330881200005300015',phone:'18002117292',createDate:'2000-05-30',sex:'1'},
    {name:'深秋',code:'330881200011290015',phone:'17922117292',createDate:'2000-11-29',sex:'1'},
    {name:'晁桑',code:'330881199901100015',phone:'17605721490',createDate:'1999-01-10',sex:'1'},
    {name:'黄桑',code:'330881200010050015',phone:'18031117292',createDate:'2000-10-05',sex:'1'},
    {name:'王桑',code:'330881200003100015',phone:'18096217662',createDate:'2000-03-10',sex:'1'},
    {name:'杜桑',code:'330881200009150015',phone:'17605902571',createDate:'2000-09-15',sex:'1'}])
// 总条数
const total = ref(tableData.value.length)
// 分页信息
const pagerInfo = reactive({
    currentPage: 1,
    pageSize: 10
})
// 搜索栏
const dataSource = reactive([
    {
        type: 'input',  //类型
        label: '学生姓名',  //标签名
        keywords: 'name',  //字段名称
        placeholder: '' //提示语
    },
])
// 搜索栏数据
const formInline = reactive({
    name: '',
    project: '',
    status: ''
})
// 查询列表数据
const queryDatas = () => {
    loading.value = true
    setTimeout(() => {
        queryList(Object.assign({}, formInline, pagerInfo)).then(res => {
            if (res.data.code === '200') {
                total.value = res.data.content.total
                tableData.value = res.data.content.result
            } else {
                ElMessage.error('服务器繁忙,稍后再试')
            }
            loading.value = false
        })
    }, 1000);
}

onMounted(() => {
    // 查询列表数据
    // queryDatas()
})

// 表格样式调整
const changeCellStyle = (row, column, rowIndex, columnIndex) => {
    if (row.column.label === "准考证号") {
        return (
            {
                color: '#389DFF',
            }
        )
    } else {
        return "";
    }
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