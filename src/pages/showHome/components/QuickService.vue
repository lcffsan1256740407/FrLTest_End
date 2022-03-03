<script lang="ts" setup>

</script>

<template>
  <div id="service">
    <el-card class="box-card" header="快捷服务">
      <div class="item">
        <img src="@/assets/icons/student.svg" />
        <span>考试时间</span>
      </div>
      <div class="item">
        <img src="@/assets/icons/help.svg" />
        <span>帮助中心</span>
      </div>
      <div class="item">
        <img src="@/assets/icons/v.svg" />
        <span>管理认证</span>
      </div>
      <div class="item">
        <img src="@/assets/icons/person.svg" />
        <span>考生板块</span>
      </div>
      <div class="item">
        <img src="@/assets/icons/computer.svg" />
        <span>成绩查询</span>
      </div>
      <div class="item">
        <img src="@/assets/icons/good.svg" />
        <span>发布消息</span>
      </div>

    </el-card>
  </div>
</template>

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
        img {
          width: 50px;
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>