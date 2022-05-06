<template>
    <Search />

    <el-table
        :data="tableData"
        style="width: 100%;margin-bottom: 20px;min-height: 450px;"
        table-layout="fixed"
        border
        :header-cell-style="{ background: '#dae7fa', color: '#606266' }"
        :header-row-style="{ height: '50px' }"
        :row-style="{ height: '50px' }"
        :stripe="true"
        :cell-style="changeCellStyle"
    >
        <el-table-column prop="name" label="姓名" align="center" />
        <el-table-column prop="area" label="区域" align="center" />
        <el-table-column prop="testArea" label="考场" align="center" />
        <el-table-column label="操作" align="center">
            <template #default="scope">
                <el-button type="primary" @click="handleClick(scope)">修改考场</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>
    
<script setup lang='ts'>

const tableData = [
    {
        name: '测试一号',
        area: '浙江',
        testArea: '浙江一号考场'
    },
    {
        name: '测试二号',
        area: '浙江',
        testArea: '浙江二号考场'
    },
]

const changeCellStyle = (row, column, rowIndex, columnIndex) => {
    if (row.row.status === '已满') {
        return (
            {
                color: 'rgb(245, 108, 108)'
            }
        )
    }

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

const handleClick = (scope) => {

}
</script>
    
<style scoped>
</style>