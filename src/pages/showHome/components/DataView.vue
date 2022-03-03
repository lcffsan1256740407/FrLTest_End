<script lang="ts" setup>


const svg = ref<HTMLElement | null>(null)
const getData = () => {
  svg.value ? svg.value.classList.add('iconAnimation') : null //添加带动画的类名->开启动画
  setTimeout(() => {
    svg.value ? svg.value.classList.remove('iconAnimation') : null //移除->停止动画
  }, 1000)
}
</script>

<template>
  <div id="dataView">
    <el-card class="box-card">
      <!-- 顶部 -->
      <template #header>
        <div class="card-header">
          <span>数据概览</span>
          <span class="rtitle">更新时间：2021-02-22 14:08:25</span>
          <svg
            ref="svg"
            @click="getData"
            class="icon"
            width="20"
            height="20"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            data-v-042ca774
          >
            <path
              fill="currentColor"
              d="M771.776 794.88A384 384 0 01128 512h64a320 320 0 00555.712 216.448H654.72a32 32 0 110-64h149.056a32 32 0 0132 32v148.928a32 32 0 11-64 0v-50.56zM276.288 295.616h92.992a32 32 0 010 64H220.16a32 32 0 01-32-32V178.56a32 32 0 0164 0v50.56A384 384 0 01896.128 512h-64a320 320 0 00-555.776-216.384z"
            />
          </svg>
        </div>
      </template>
      <!-- 内容渲染 -->
      <div class="item">
        <span>总考生数</span>
        <span>12000</span>
        <p>
          <span>较昨日</span>
          <img src="@/assets/icons/topJT.svg" />
          <span>12.30%</span>
        </p>
        <p>
          <span>较前七日</span>
          <img src="@/assets/icons/bottomJT.svg" />
          <span>2.30%</span>
        </p>
      </div>
      <div class="item">
        <span>总开放考场数</span>
        <span>87,676</span>
        <p>
          <span>较昨日</span>
          <img src="@/assets/icons/topJT.svg" />
          <span>12.30%</span>
        </p>
        <p>
          <span>较前七日</span>
          <img src="@/assets/icons/bottomJT.svg" />
          <span>2.30%</span>
        </p>
      </div>
      <div class="item">
        <span>管理员人数</span>
        <span>625</span>
        <p>
          <span>较昨日</span>
          <img src="@/assets/icons/topJT.svg" />
          <span>12.30%</span>
        </p>
        <p>
          <span>较前七日</span>
          <img src="@/assets/icons/bottomJT.svg" />
          <span>2.30%</span>
        </p>
      </div>
      <div class="item">
        <span>考生:待分配考场</span>
        <span>320</span>
        <p>
          <span>较昨日</span>
          <img src="@/assets/icons/topJT.svg" />
          <span>12.30%</span>
        </p>
        <p>
          <span>较前七日</span>
          <img src="@/assets/icons/bottomJT.svg" />
          <span>2.30%</span>
        </p>
      </div>
      <div class="item">
        <span>等审批信息</span>
        <span>8</span>
        <p>
          <span>较昨日</span>
          <img src="@/assets/icons/topJT.svg" />
          <span>50%</span>
        </p>
        <p style="opacity: 0;">
          <span>较前七日</span>
          <img src="@/assets/icons/topJT.svg" />
          <span>2.30%</span>
        </p>
      </div>
      <div class="item">
        <span>本日发送公告数</span>
        <span>2</span>
        <p>
          <span>较昨日</span>
          <img src="@/assets/icons/topJT.svg" />
          <span>100%</span>
        </p>
        <p style="opacity: 0;">
          <span>较前七日</span>
          <img src="@/assets/icons/topJT.svg" />
          <span>2.30%</span>
        </p>
      </div>
    </el-card>
  </div>
</template>

<style scoped lang="less">
// svg旋转动画
@keyframes rotate {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(180deg);
  }
}
#dataView {
  .box-card {
    width: 100%;
    .card-header {
      display: flex;
      align-items: center;
      .rtitle {
        margin-left: 25px;
        margin-right: 5px;
        font-size: 14px;
        color: silver;
      }
      .icon {
        cursor: pointer;
        &:hover {
          color: tomato;
        }
      }
      // 添加动画后的svg
      .iconAnimation {
        animation: rotate 1.5s linear infinite;
      }
    }
    &:deep(.el-card__body) {
      height: 180px;
      padding: 0 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        img{
          width: 16px;
        }
        p {
          display: flex;
          align-items: center;
        }
        & > span:nth-child(1) {
          font-size: 14px;
        }
        & > span:nth-child(2) {
          font-size: 24px;
          font-weight: 500;
          margin: 6px 0;
        }

        :nth-child(3) {
          span {
            color: rgb(22, 160, 88);
          }
        }
        :nth-child(4) {
          span {
            color: tomato;
          }
        }

        p > span:nth-child(1) {
          font-size: 12px;
          color: #7e7e7e;
        }
      }
    }
  }
}
</style>