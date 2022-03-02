<script lang="ts" setup>
const datas = [
  { state: 1, message: '这里是公告标题..' },
  { state: 2, message: '这里是公告标题..' },
  { state: 1, message: '这里是公告标题这里是公告标题这里是公告标题这里是公告标题..' },
  { state: 2, message: '这里是公告标题..' },
  { state: 2, message: '这里是公告标题..' },
]
</script>

<template>
  <div id="sign">
    <el-card class="box-card">
      <!-- 顶部 -->
      <template #header>
        <div class="card-header">
          <span>公告</span>
          <span class="rtitle">全部公告 ></span>
        </div>
      </template>
      <!-- 内容渲染 -->
      <ul>
        <li v-for="(item, index) of datas" :key="index">
          <div class="symbol"></div>
          <span>【{{ item.state === 1 ? '系统升级' : '公告通知' }}】</span>
          <span>{{ item.message }}</span>
        </li>
      </ul>
    </el-card>
  </div>
</template>

<style scoped lang="less">

#sign{
  .box-card {
    width: 100%;
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .rtitle {
        font-size: 14px;
        cursor: pointer;
        color: silver;
        &:hover {
          color: tomato;
        }
      }
    }
    &:deep(.el-card__body){
      padding: 5px 0 0 20px;
      li {
        cursor: pointer;
        color: #7a7474;
        margin: 22px 0;
        display: flex;
        align-items: center;
        .symbol {
          background-color: black;
          border-radius: 50%;
          display: inline-block;
          width: 4px;
          height: 4px;
        }
        span {
          margin-right: 10px;
        }
        &:hover {
          color: black;
        }
      }
    }
  }

}
</style>