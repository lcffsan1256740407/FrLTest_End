<script lang="ts" setup>

</script>

<template>
  <el-card class="box-card" header="外语官网">
    <div>
      <img src="@/assets/other/yinyu.jpg" />
      <p>
        <span>英语</span>
        <span>2022年上半年全国英语等级考试(以下简称PETS)...</span>
      </p>
    </div>
    <div>
      <img src="@/assets/other/riyu.jpg" />
      <p>
        <span>日语</span>
        <span>日本语能力测试是日本国际交流基金会主办的...</span>
      </p>
    </div>
    <div>
      <img src="@/assets/other/fayu.jpg" style="height: 100%;"/>
      <p>
        <span>法语</span>
        <span>法语水平考试(Test d'Evaluation de Fran...</span>
      </p>
    </div>
    <div>
      <img src="@/assets/other/deyu.jpg" />
      <p>
        <span>德语</span>
        <span>TestDaF试题由德国TestDaF考试学院集中命题...</span>
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
        cursor: pointer;
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
          font-size: 18px;
        }
        span {
          margin: 5px 0;
          overflow: hideen;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>