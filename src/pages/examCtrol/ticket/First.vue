<template>
    <!-- 准考证管理 -->
    <el-table v-loading="loading" :data="tableData" style="width: 100%;margin-bottom: 20px;min-height: 450px;"
        table-layout="fixed" border :header-cell-style="{ background: '#dae7fa', color: '#606266' }"
        :header-row-style="{ height: '50px' }" :row-style="{ height: '50px' }" :stripe="true"
        :cell-style="changeCellStyle">
        <el-table-column prop="name" label="姓名" align="center" />
        <el-table-column prop="testArea" label="考试区域" align="center" />
        <el-table-column prop="testRoom" label="考场" align="center">
            <template #default="{ row }">
                <span :style="{ color: row.testRoom ? 'black' : 'tomato' }">{{ row.testRoom ? row.testRoom : '/' }}</span>
            </template>
        </el-table-column>
        <el-table-column prop="project" label="考试科目" align="center" />
        <el-table-column prop="code" label="准考证号" align="center" />
    </el-table>

    <Pagination :total='total' :pagerInfo='pagerInfo' @queryDatas='queryDatas' />
</template>
    
<script setup lang='ts'>
import { queryList } from '@/services/examinfolist'
import Pagination from "../../../components/Pagination/index.vue";
const tableData = ref([
    {name:'秋田',testArea:'浙江',testRoom:'滨江中学',project:'俄语',code:'18070007X'},
    {name:'秋田',testArea:'浙江',testRoom:'滨江中学',project:'英语',code:'18070007X'},
    {name:'秋田',testArea:'浙江',testRoom:'滨江中学',project:'日语',code:'18070007X'},
    {name:'秋田',testArea:'上海',testRoom:'江山二中',project:'法语',code:'18070007X'},
    {name:'深秋',testArea:'浙江',testRoom:'滨江中学',project:'英语',code:'18070017X'},
    {name:'晁桑',testArea:'天津',testRoom:'城北中学',project:'日语',code:'18070027X'},
    {name:'晁桑',testArea:'天津',testRoom:'城北中学',project:'俄语',code:'18070032X'},
    {name:'黄桑',testArea:'浙江',testRoom:'滨江中学',project:'英语',code:'18070006X'},
    {name:'黄桑',testArea:'浙江',testRoom:'滨江中学',project:'俄语',code:'18070026X'}
])
const loading = ref(false)
// 总条数
const total = ref(tableData.value.length)
// 分页信息
const pagerInfo = reactive({
    currentPage: 1,
    pageSize: 10
})
// 查询列表数据
const queryDatas = () => {
    loading.value = true
    setTimeout(() => {
        queryList(Object.assign({ status: '0', code: 'notNull' }, pagerInfo)).then(res => {
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
// 更改样式
const changeCellStyle = (row, column, rowIndex, columnIndex) => {
    if (row.column.label === "考生证件号") {
        return (
            {
                color: '#389DFF',
            }
        )
    } else {
        return "";
    }
}

onMounted(() => {
    // 查询列表数据
    // queryDatas()
})
</script>
    
<style scoped>
</style>