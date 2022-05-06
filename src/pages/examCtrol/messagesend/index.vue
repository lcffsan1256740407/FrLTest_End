<template>
  <!-- 消息发布 -->
  <el-card class="main">
    <template #header>
      <div class="headerNames">消息发布</div>
    </template>
    <Search
      :dataSource="dataSource"
      :formInline="formInline"
      @queryDatas="queryDatas"
    />
    <el-button type="primary" class="add">新增</el-button>
    <el-table
      v-loading="loading"
      :data="tableData"
      style="width: 100%; margin-bottom: 20px; min-height: 450px"
      table-layout="fixed"
      border
      :header-cell-style="{ background: '#dae7fa', color: '#606266' }"
      :header-row-style="{ height: '50px' }"
      :row-style="{ height: '50px' }"
      :stripe="true"
      :cell-style="changeCellStyle"
    >
      <el-table-column prop="name" label="标题" align="center" />
      <el-table-column
        prop="message"
        label="公告内容"
        align="center"
        width="150px"
        :show-overflow-tooltip="true"
      />
      <el-table-column prop="date" label="创建时间" align="center" />
      <el-table-column label="状态" align="center">
        <template #default="{ row }">
          <span>{{ row.status === "0" ? "未启用" : "已启用" }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="250px">
        <template #default="{ row }" style="color: skyblue">
          <span class="btn">禁用</span>
          <span class="btn">编辑</span>
          <span class="btn">删除</span>
        </template>
      </el-table-column>
    </el-table>

    <Pagination
      :total="total"
      :pagerInfo="pagerInfo"
      @queryDatas="queryDatas"
    />
  </el-card>
</template>

<script lang="ts" setup>
import moment from "moment";
import { queryList } from "@/services/examinfolist";
import Search from "@/components/Searchs/search.vue";
import { ref } from "vue";
import Pagination from "../../../components/Pagination/index.vue";
const loading = ref(false);
const tableData = ref([
  {
    name: "系统升级",
    state: 1,
    message: "于今晚12点系统进行更新",
    date: "2022-03-01 12:53:21",
  },
  {
    name: "公告通知",
    state: 2,
    message: "近期开放管理员注册接口,凭下发推荐码和证件号注册..",
    date: "2022-03-05 10:20:13",
  },
  {
    name: "系统升级",
    state: 1,
    message: "考生管理模块维护至下午5点..",
    date: "2022-03-10 06:05:10",
  },
  {
    name: "公告通知",
    state: 2,
    message: "请留存好账号密码,暂时不开放找回密码功能",
    date: "2022-03-10 13:56:50",
  },
  {
    name: "公告通知",
    state: 2,
    message: "使用本管理系统平台前,请阅读用户手册",
    date: "2022-03-12 15:10:23",
  },
]);
// 总条数
const total = ref(tableData.value.length);
// 分页信息
const pagerInfo = reactive({
  currentPage: 1,
  pageSize: 10,
});
// 搜索栏
const dataSource = reactive([
  {
    type: "input", //类型
    label: "公告内容", //标签名
    keywords: "name", //字段名称
    placeholder: "", //提示语
  },
]);
// 搜索栏数据
const formInline = reactive({
  name: "",
  project: "",
  status: "",
});
// 查询列表数据
const queryDatas = () => {
  loading.value = true;
  setTimeout(() => {
    queryList(Object.assign({}, formInline, pagerInfo)).then((res) => {
      if (res.data.code === "200") {
        total.value = res.data.content.total;
        tableData.value = res.data.content.result;
      } else {
        ElMessage.error("服务器繁忙,稍后再试");
      }
      loading.value = false;
    });
  }, 1000);
};

onMounted(() => {
  // 查询列表数据
  // queryDatas()
});

// 表格样式调整
const changeCellStyle = (row, column, rowIndex, columnIndex) => {
  if (row.column.label === "准考证号") {
    return {
      color: "#389DFF",
    };
  } else {
    return "";
  }
};
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
  .add {
    margin-bottom: 20px;
  }
  .btn {
    color: rgb(64, 158, 255);
    padding: 0 15px;
    cursor: pointer;
  }
}
</style>
