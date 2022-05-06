<template>
  <el-form ref="ruleFormRef" :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item v-for="(item, index) of dataSource" :label="item.label" :key="index" :prop="item.keywords">
      <!-- type === input -->
      <el-input v-if="item.type === 'input'" v-model="formInline[item.keywords]"
        :placeholder="item.placeholder ? item.placeholder : null"></el-input>
      <!-- type === select -->
      <el-select v-if="item.type === 'select'" v-model="formInline[item.keywords]"
        :placeholder="item.placeholder ? item.placeholder : ' '">
        <el-option v-for="(option, index) of item.data" :key="index" :label="option.name" :value="option.value">
        </el-option>
      </el-select>
    </el-form-item>

    <!-- 按钮 -->
    <div class="Btn">
      <el-form-item>
        <el-button type="primary" @click="onSubmit(ruleFormRef)">搜索</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onReset(ruleFormRef)">重置</el-button>
      </el-form-item>
    </div>
  </el-form>

</template>


<script setup lang="ts">
import type { ElForm } from 'element-plus'

type FormInstance = InstanceType<typeof ElForm>
const ruleFormRef = ref<FormInstance>()
const props = defineProps(['dataSource', 'formInline'])
const emit = defineEmits(['queryDatas'])

// 搜索
const onSubmit = (formEl: FormInstance | undefined) => {
  emit('queryDatas')
}
// 重置
const onReset = (formEl: FormInstance | undefined) => {
  formEl!.resetFields()
}
</script>



<style scoped lang="less">
.demo-form-inline {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  .el-form-item.el-form-item--default {
    margin: 0;
  }
}

// 按钮
.Btn {
  width: 140px;
  display: flex;
  justify-content: space-between;
}

// 导出 
.export {
  margin: 20px 0;
  float: right;
}
</style>