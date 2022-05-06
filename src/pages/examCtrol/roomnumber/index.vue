<template>
  <!-- 考场列表 -->
  <el-card class="main">
    <template #header>
      <div class="headerNames">考场列表</div>
    </template>
    <Search
      :dataSource="dataSource"
      :formInline="formInline"
      @queryDatas="queryDatas"
    />

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
      <el-table-column prop="name" label="考场名称" align="center" />
      <el-table-column
        prop="area"
        label="所属区域"
        align="center"
        width="150px"
        :show-overflow-tooltip="true"
      >

      </el-table-column>
      <el-table-column prop="havePerson" label="当前人数" align="center" />
      <el-table-column prop="allPerson" label="总容量" align="center" />

      <el-table-column label="当前状态" align="center">
        <template #default="{ row }">
          <span :style="{ color: row.status === '0' ? 'black' : 'tomato' }">{{
            row.status === "0" ? "未满" : "已满"
          }}</span>
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
    name: "城北中学",
    area: "天津",
    havePerson: "2",
    allPerson: "50",
    status: "0",
  },
  {
    name: "江山二中",
    area: "浙江",
    havePerson: "5",
    allPerson: "50",
    status: "0",
  },
  {
    name: "滨江中学",
    area: "浙江",
    havePerson: "3",
    allPerson: "50",
    status: "0",
  },
  {
    name: "江山三中",
    area: "浙江",
    havePerson: "0",
    allPerson: "50",
    status: "0",
  },
  {
    name: "育才中学",
    area: "天津",
    havePerson: "0",
    allPerson: "50",
    status: "0",
  },
  {
    name: "城南中学",
    area: "上海",
    havePerson: "0",
    allPerson: "50",
    status: "0",
  },
  {
    name: "西北中学",
    area: "上海",
    havePerson: "0",
    allPerson: "50",
    status: "0",
  },
  {
    name: "蓝天中学",
    area: "上海",
    havePerson: "0",
    allPerson: "50",
    status: "0",
  },
  {
    name: "拱墅中学",
    area: "上海",
    havePerson: "0",
    allPerson: "50",
    status: "0",
  },
  {
    name: "德育中学",
    area: "上海",
    havePerson: "0",
    allPerson: "50",
    status: "0",
  },
]);
// 总条数
const total = ref(15);
// 分页信息
const pagerInfo = reactive({
  currentPage: 1,
  pageSize: 10,
});
// 搜索栏
const dataSource = reactive([
  {
    type: "input", //类型
    label: "考场名称", //标签名
    keywords: "name", //字段名称
    placeholder: "", //提示语
  },
  {
    type: "select",
    label: "所属区域",
    keywords: "project",
    placeholder: "",
    data: [
      { name: "英语", value: "英语" },
      { name: "日语", value: "日语" },
      { name: "法语", value: "法语" },
      { name: "俄语", value: "俄语" },
      { name: "德语", value: "德语" },
    ],
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
//   queryDatas();
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
}
</style>
