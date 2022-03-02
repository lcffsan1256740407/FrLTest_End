<script lang="ts" setup>

</script>

<template>
  <div id="service">
    <el-card class="box-card" header="快捷服务">
      <div class="item">
        <img src="@/assets/icons/computer.svg" />
        <span>查看消息</span>
      </div>
      <div class="item">
        <img src="@/assets/icons/computer.svg" />
        <span>查看消息</span>
      </div>
      <div class="item">
        <img src="@/assets/icons/computer.svg" />
        <span>查看消息</span>
      </div>
      <div class="item">
        <img src="@/assets/icons/computer.svg" />
        <span>查看消息</span>
      </div>
      <div class="item">
        <img src="@/assets/icons/computer.svg" />
        <span>查看消息</span>
      </div>
      <div class="item">
        <img src="@/assets/icons/computer.svg" />
        <span>查看消息</span>
      </div>

      <div class="item">
        <img src="@/assets/icons/computer.svg" />
        <span>查看消息</span>
      </div>
    </el-card>
  </div>
</template>

<style scoped lang="less">
#service {
  .box-card {
    width: 100%;
    &:deep(.el-card__body) {
      padding-left: 5px;
      padding: 0;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .item {
        margin: 20px 45px;
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