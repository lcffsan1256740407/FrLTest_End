<template>
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
    <el-table-column prop="name" label="姓名" align="center" />
    <el-table-column prop="testArea" label="考试区域" align="center" />
    <el-table-column prop="testRoom" label="考场" align="center">
      <template #default="{ row }">
        <span :style="{ color: row.testRoom ? 'black' : 'tomato' }">{{
          row.testRoom ? row.testRoom : "/"
        }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="project" label="考试科目" align="center" />
    <el-table-column prop="code" label="准考证号" align="center">
      <template #default="{ row }">
        <span style="color: tomato">{{ row.code ? row.code : "待生成" }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作" align="center">
      <template #default="scope">
        <el-button type="primary" @click="create">生成</el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-dialog
    v-model="dialogVisible"
    title="准考证号生成"
    width="30%"

  >
     <el-input v-model="code" placeholder="请输入生成准考证号" />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确认</el-button
        >
      </span>
    </template>
  </el-dialog>

  <Pagination :total="total" :pagerInfo="pagerInfo" @queryDatas="queryDatas" />
</template>

<script setup lang="ts">
import { queryList } from "@/services/examinfolist";
import Pagination from "../../../components/Pagination/index.vue";
// 准考证号生成弹窗
const dialogVisible = ref(false)
const code = ref()

const tableData = ref([
  {
    name: "黄桑",
    testArea: "浙江",
    testRoom: "滨江中学",
    project: "俄语",
    code: "",
  },
  {
    name: "晁桑",
    testArea: "浙江",
    testRoom: "滨江中学",
    project: "英语",
    code: "",
  },
  {
    name: "王桑",
    testArea: "浙江",
    testRoom: "滨江中学",
    project: "日语",
    code: "",
  },
  {
    name: "杜桑",
    testArea: "上海",
    testRoom: "江山二中",
    project: "法语",
    code: "",
  },
  {
    name: "深秋",
    testArea: "浙江",
    testRoom: "滨江中学",
    project: "日语",
    code: "",
  },
]);
const loading = ref(false);
// 总条数
const total = ref(tableData.value.length);
// 分页信息
const pagerInfo = reactive({
  currentPage: 1,
  pageSize: 10,
});
// 查询列表数据
const queryDatas = () => {
  loading.value = true;
  setTimeout(() => {
    queryList(Object.assign({ status: "0", code: "Null" }, pagerInfo)).then(
      (res) => {
        if (res.data.code === "200") {
          total.value = res.data.content.total;
          tableData.value = res.data.content.result;
        } else {
          ElMessage.error("服务器繁忙,稍后再试");
        }
        loading.value = false;
      }
    );
  }, 1000);
};
// 更改样式
const changeCellStyle = (row, column, rowIndex, columnIndex) => {
  if (row.column.label === "考生证件号") {
    return {
      color: "#389DFF",
    };
  } else {
    return "";
  }
};
// 生成准考证号弹窗
const create = () => {
    dialogVisible.value = true
};
onMounted(() => {
  // 查询列表数据
  // queryDatas()
});
</script>

<style scoped></style>
