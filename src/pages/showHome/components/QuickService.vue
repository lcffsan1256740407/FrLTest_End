<template>
  <div id="service">
    <el-card class="box-card" header="快捷服务">
      <div class="item" @click="openTime = true">
        <img src="@/assets/icons/student.svg" />
        <span>考试时间</span>
      </div>
      <div class="item" @click="openHelp = true">
        <img src="@/assets/icons/help.svg" />
        <span>平台提示</span>
      </div>
      <div class="item">
        <img src="@/assets/icons/v.svg" />
        <span>审批账号</span>
      </div>
      <div class="item">
        <img src="@/assets/icons/person.svg" />
        <span>考生板块</span>
      </div>
      <div class="item">
        <img src="@/assets/icons/computer.svg" />
        <span>考场管理</span>
      </div>
      <div class="item">
        <img src="@/assets/icons/good.svg" />
        <span>发布消息</span>
      </div>
    </el-card>

    <!-- 考试时间 -->
    <el-dialog v-model="openTime" title="考试时间" width="60%" center>
      <div>
        <p
          style="line-height:200%"
        >全国外语水平考试(简称WSK)于每年的5月和11月开考，5月开考科目：英语(PETS-5)、法语(TNF)、德语(NTD)；11月开考科目：英语(PETS-5)、日语(NNS).</p>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="openTime = false">确定</el-button>
        </span>
      </template>
    </el-dialog>

    <!-- 平台提示 -->
    <el-dialog v-model="openHelp" title="平台提示"  center>
      <div>
        <p
          style="line-height:200%"
        >
          管理员账号需要根据推荐码进行注册,后根据最高管理进行二次确认后生效,该平台用于管理员对考生进行考场的具体分配和信息管理,进行操作时请谨慎修改
        </p>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="openHelp = false">确定</el-button>
        </span>
      </template>
    </el-dialog>

  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const openTime = ref(false) //考试时间 
const openHelp = ref(false) //帮助中心
</script>

<style scoped lang="less">
#service {
  .box-card {
    width: 100%;
    &:deep(.el-card__body) {
      padding: 0;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .item {
        margin: 20px 35px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        img {
          width: 50px;
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>