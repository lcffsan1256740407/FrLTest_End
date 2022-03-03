<script lang="ts" setup>
const datas = [
  { state: 1, message: '于今晚12点系统进行更新' },
  { state: 2, message: '近期开放管理员注册接口,凭下发推荐码和证件号注册..' },
  { state: 1, message: '本地生活圈维护至下午5点..' },
  { state: 2, message: '请留存好账号密码,暂时不开放找回密码功能' },
  { state: 2, message: '使用本管理系统平台前,请阅读用户手册' },
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
            <span class="message">{{ item.message }}</span>
            <img src="@/assets/icons/new.svg" v-if="index < 3" />
          
          <span class="date">2022-03-01 12:00:00</span>
        </li>
      </ul>
    </el-card>
  </div>
</template>

<style scoped lang="less">
#sign {
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
    &:deep(.el-card__body) {
      padding: 5px 0 0 20px;
      li {
        position: relative;
        cursor: pointer;
        color: #7a7474;
        margin: 22px 0;
        display: flex;
        align-items: center;
        // justify-content: start;
        // padding-right: 20px;
        .symbol {
          background-color: black;
          border-radius: 50%;
          display: inline-block;
          width: 4px;
          height: 4px;
        }
        .message {
          max-width: 200px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .date {
          position:absolute;
          right: 15px;
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