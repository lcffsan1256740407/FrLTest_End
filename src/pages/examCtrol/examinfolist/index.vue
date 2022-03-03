<template>
    <el-card class="main" header="信息记录">
        <div class="search">
            <Search />
        </div>

        <div class="table">
            <el-table
                :data="tableData"
                style="width: 100%"
                table-layout="fixed"
                border
                :header-cell-style="{ background: '#dae7fa', color: '#606266' }"
                :header-row-style="{ height: '50px' }"
                :row-style="{ height: '50px' }"
                :stripe="true"
                :cell-style="changeCellStyle"
            >
                <el-table-column prop="name" label="姓名" align="center" />
                <el-table-column prop="contact" label="联系方式" align="center" />
                <el-table-column
                    prop="examCode"
                    label="考生证件号"
                    align="center"
                    width="150px"
                    :show-overflow-tooltip="true"
                />
                <el-table-column prop="area" label="考试区域" align="center" />
                <el-table-column prop="subject" label="考试科目" align="center" />
                <el-table-column prop="createTime" label="报名时间" align="center" />
                <el-table-column prop="status" label="当前状态" align="center" />
            </el-table>
        </div>
    </el-card>
</template>

<script lang="ts" setup>
import Search from "@/components/Searchs/search.vue";
const tableData = [
    {
        name: '叶英',
        contact: 181612313,
        examCode: '55646519845131354X',
        area: '浙江',
        subject: '日语',
        createTime: '2022-02-19',
        status: '未开考'
    },
    {
        name: '叶英',
        contact: 181612313,
        examCode: '55646519845131354X',
        area: '浙江',
        subject: '日语',
        createTime: '2022-02-19',
        status: '未开考'
    },
    {
        name: '叶英',
        contact: 181612313,
        examCode: '55646519845131354X',
        area: '浙江',
        subject: '日语',
        createTime: '2022-02-19',
        status: '未开考'
    },
    {
        name: '叶英',
        contact: 181612313,
        examCode: '55646519845131354X',
        area: '浙江',
        subject: '日语',
        createTime: '2022-02-19',
        status: '未开考'
    },
    {
        name: '叶英',
        contact: 181612313,
        examCode: '55646519845131354X',
        area: '浙江',
        subject: '日语',
        createTime: '2022-02-19',
        status: '未开考'
    },
    {
        name: '测试数据二号',
        contact: 191665713,
        examCode: '96969519845131354X',
        area: '成都',
        subject: '德语',
        createTime: '2022-02-20',
        status: '未开考'
    },
    {
        name: '测试数据三号',
        contact: 181612313,
        examCode: '55646519845131354X',
        area: '浙江',
        subject: '日语',
        createTime: '2022-02-19',
        status: '未开考'
    },
    {
        name: '叶英',
        contact: 181612313,
        examCode: '55646519845131354X',
        area: '浙江',
        subject: '日语',
        createTime: '2022-02-19',
        status: '未开考'
    },
    {
        name: '叶英',
        contact: 181612313,
        examCode: '55646519845131354X',
        area: '浙江',
        subject: '日语',
        createTime: '2022-02-19',
        status: '未开考'
    },
    {
        name: '叶英',
        contact: 181612313,
        examCode: '55646519845131354X',
        area: '浙江',
        subject: '日语',
        createTime: '2022-02-19',
        status: '未开考'
    },

]
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
</script>

<style scoped lang="less">
.main {
    width: 100%;
    height: 100%;
    .search {
        margin-bottom: 35px;
    }
}
</style>