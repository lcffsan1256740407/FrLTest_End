<template>
  <el-form ref="ruleFormRef" :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item
      v-for="(item, index) of dataSource"
      :label="item.label"
      :key="index"
      :prop="item.keywords"
    >
      <!-- type === input -->
      <el-input
        v-if="item.type === 'input'"
        v-model="formInline[item.keywords]"
        :placeholder="item.placeholder ? item.placeholder : null"
      ></el-input>
      <!-- type === select -->
      <el-select
        v-if="item.type === 'select'"
        v-model="formInline[item.keywords]"
        :placeholder="item.placeholder ? item.placeholder : ' '"
      >
        <el-option
          v-for="(option, index) of item.data"
          :key="index"
          :label="option.name"
          :value="option.value"
        ></el-option>
      </el-select>
    </el-form-item>

    <!-- 按钮 -->
    <el-form-item>
      <el-button type="primary" @click="onSubmit(ruleFormRef)">搜索</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onReset(ruleFormRef)">重置</el-button>
    </el-form-item>
  </el-form>
</template>


<script setup lang="ts">
import type { ElForm } from 'element-plus'

type FormInstance = InstanceType<typeof ElForm>
const ruleFormRef = ref<FormInstance>()
// 数据源
const dataSource = reactive([
  {
    type: 'input',  //类型
    label: '学生姓名',  //标签名
    keywords: 'companyName',  //字段名称
    placeholder: '' //提示语
  },
  {
    type: 'select',
    label: '性别',
    keywords: 'sex',
    placeholder: '',
    data: [
      { name: '男', value: 1 },
      { name: '女', value: 2 }
    ]
  },
  {
    type: 'select',
    label: '考试科目',
    keywords: 'department',
    placeholder: '',
    data: [
      { name: '前端', value: 1 },
      { name: '后端', value: 2 }
    ]
  }
])
// 表单返回值
const formInline = reactive({

})
// 搜索
const onSubmit = (formEl: FormInstance | undefined) => {
  console.log(formInline)
}
// 重置
const onReset = (formEl: FormInstance | undefined) => {
  formEl!.resetFields()
}
</script>



<style scoped lang="less">
.demo-form-inline{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .el-form-item.el-form-item--default{
    margin: 0;
  }
}
</style>