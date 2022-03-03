<script lang="ts" setup>

</script>

<template>
  <el-card class="box-card" header="运营解决方案">
    <div>
      <img src="@/assets/loginImgs/loginPage.jpg" />
      <p>
        <span>方案标题不超十字</span>
        <span>这里是方案副标题这里是方案副最多二十字</span>
      </p>
    </div>
    <div>
      <img src="@/assets/loginImgs/loginPage.jpg" />
      <p>
        <span>方案标题不超十字</span>
        <span>这里是方案副标题这里是方案副最多二十字</span>
      </p>
    </div>
    <div>
      <img src="@/assets/loginImgs/loginPage.jpg" />
      <p>
        <span>方案标题不超十字</span>
        <span>这里是方案副标题这里是方案副最多二十字</span>
      </p>
    </div>
    <div>
      <img src="@/assets/loginImgs/loginPage.jpg" />
      <p>
        <span>方案标题不超十字</span>
        <span>这里是方案副标题这里是方案副最多二十字</span>
      </p>
    </div>
  </el-card>
</template>

<style scoped lang="less">
.box-card {
  width: 100%;
  &:deep(.el-card__body) {
    display: flex;
    justify-content: space-between;
    & > 　div {
      margin: 15px;
      width: 433px;
      height: 244px;
      background-color: tomato;
      border-radius: 15px;
      overflow: hidden;
      position: relative;
      &:hover {
        img {
          transform: scale(1.5);
          transition: 1s;
        }
      }
      img {
        width: 433px;
        position: absolute;
      }
      p {
        bottom: 10px;
        left: 15px;
        position: absolute;
        z-index: 10;
        display: flex;
        flex-direction: column;
        color: white;
        :nth-child(1) {
          font-size: 16px;
        }
      }
    }
  }
}
</style>