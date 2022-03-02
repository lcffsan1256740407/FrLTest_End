<script lang="ts" setup>

</script>

<template>
  <el-card class="box-card" header="管理工具">
    <div class="item">
      <img src="@/assets/icons/type.svg" />
      <span>看板查看</span>
    </div>
    <div class="item">
      <img src="@/assets/icons/type.svg" />
      <span>看板查看</span>
    </div>
    <div class="item">
      <img src="@/assets/icons/type.svg" />
      <span>看板查看</span>
    </div>
    <div class="item">
      <img src="@/assets/icons/type.svg" />
      <span>看板查看</span>
    </div>
    <div class="item">
      <img src="@/assets/icons/type.svg" />
      <span>看板查看</span>
    </div>
    <div class="item">
      <img src="@/assets/icons/type.svg" />
      <span>看板查看</span>
    </div>
  </el-card>
</template>

<style scoped lang="less">
.box-card {
  width: 100%;
  &:deep(.el-card__body) {
    height: 150px;
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
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
</style>