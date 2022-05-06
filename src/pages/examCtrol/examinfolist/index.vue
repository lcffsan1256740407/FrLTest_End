<template>
    <!-- 报考列表 -->
    <el-card class="main">
        <template #header>
            <div class="headerNames">报考列表</div>
        </template>
        <Search :dataSource='dataSource' :formInline="formInline" @queryDatas='queryDatas' />

        <el-table v-loading="loading" :data="tableData" style="width: 100%;margin-bottom: 20px;min-height: 450px;"
            table-layout="fixed" border :header-cell-style="{ background: '#dae7fa', color: '#606266' }"
            :header-row-style="{ height: '50px' }" :row-style="{ height: '50px' }" :stripe="true"
            :cell-style="changeCellStyle">
            <el-table-column prop="name" label="姓名" align="center" />
            <el-table-column prop="code" label="准考证号" align="center" width="150px" :show-overflow-tooltip="true">
                <template #default="scope">
                    <span>{{ scope.row.code ? scope.row.code : '/' }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="testArea" label="考试区域" align="center" />
            <el-table-column prop="project" label="考试科目" align="center" />
            <el-table-column prop="testDate" label="考试时间" align="center">
                <template #default="{ row }">
                    <span>{{ moment(row.testDate).format('YYYY-MM-DD') }}</span>
                </template>
            </el-table-column>
            <el-table-column label="当前状态" align="center">
                <template #default="{ row }">
                    <span>{{ row.status === '0' ? '未开考' : '已结束' }}</span>
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
const tableData = ref([])
// 总条数
const total = ref()
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
    {
        type: 'select',
        label: '考试科目',
        keywords: 'project',
        placeholder: '',
        data: [
            { name: '英语', value: '英语' },
            { name: '日语', value: '日语' },
            { name: '法语', value: '法语' },
            { name: '俄语', value: '俄语' },
            { name: '德语', value: '德语' },
        ]
    },
    {
        type: 'select',
        label: '当前状态',
        keywords: 'status',
        placeholder: '',
        data: [
            { name: '未开考', value: 0 },
            { name: '已结束', value: 1 }
        ]
    }
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
    queryDatas()
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