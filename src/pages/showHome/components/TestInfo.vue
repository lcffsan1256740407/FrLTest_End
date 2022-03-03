<script lang="ts" setup>

</script>

<template>
  <el-card class="box-card" header="考试相关">
    <div class="item">
      <div class="item_header_01">考生板块</div>
      <div class="item_body_01">
        <ul>
          <el-scrollbar height="170px">
            <li>
              <p>
                <span class="symbol">◆</span>
                <span>查看考生列表</span>
              </p>
              <img src="@/assets/icons/right_arrow.png" />
            </li>
            <li>
              <p>
                <span class="symbol">◆</span>
                <span>查看考生列表</span>
              </p>
              <img src="@/assets/icons/right_arrow.png" />
            </li>
            <li>
              <p>
                <span class="symbol">◆</span>
                <span>查看考生列表</span>
              </p>
              <img src="@/assets/icons/right_arrow.png" />
            </li>
          </el-scrollbar>
        </ul>
      </div>
    </div>
    <div class="item">
      <div class="item_header_02">考场信息汇总</div>
      <div class="item_body_02">
        <ul>
          <el-scrollbar height="170px">
            <li>
              <p>
                <span class="symbol">◆</span>
                <span>查看考生列表</span>
              </p>
              <img src="@/assets/icons/right_arrow.png" />
            </li>
            <li>
              <p>
                <span class="symbol">◆</span>
                <span>查看考生列表</span>
              </p>
              <img src="@/assets/icons/right_arrow.png" />
            </li>
          </el-scrollbar>
        </ul>
      </div>
    </div>
    <div class="item">
      <div class="item_header_03">管理员信息</div>
      <div class="item_body_03">
        <ul>
          <el-scrollbar height="170px">
            <li>
              <p>
                <span class="symbol">◆</span>
                <span>查看考生列表</span>
              </p>
              <img src="@/assets/icons/right_arrow.png" />
            </li>
            <li>
              <p>
                <span class="symbol">◆</span>
                <span>查看考生列表</span>
              </p>
              <img src="@/assets/icons/right_arrow.png" />
            </li>
            <li>
              <p>
                <span class="symbol">◆</span>
                <span>查看考生列表</span>
              </p>
              <img src="@/assets/icons/right_arrow.png" />
            </li>
            <li>
              <p>
                <span class="symbol">◆</span>
                <span>查看考生列表</span>
              </p>
              <img src="@/assets/icons/right_arrow.png" />
            </li>
            <li>
              <p>
                <span class="symbol">◆</span>
                <span>查看考生列表</span>
              </p>
              <img src="@/assets/icons/right_arrow.png" />
            </li>
          </el-scrollbar>
        </ul>
      </div>
    </div>
  </el-card>
</template>

<style scoped lang="less">
.box-card {
  width: 100%;
  &:deep(.el-card__body) {
    height: 350px;
    padding: 0 50px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    .item {
      width: 30%;
      flex-direction: column;
      .item_header_01 {
        background-color: #7ea3b2;
      }
      .item_header_02 {
        background-color: #7e89b2;
      }
      .item_header_03 {
        background-color: #f0a1a8;
      }
      .item_body_01 {
        .symbol {
          color: rgb(126,163,178);
        }
      }
      .item_body_02 {
        .symbol {
          color: rgb(126,137,178);
        }
      }
      .item_body_03 {
        .symbol {
          color: #f0a1a8;
        }
      }
      > div:nth-child(1) {
        font-size: 16px;
        color: white;
        font-weight: 500;
        box-sizing: border-box;
        border-radius: 10px;
        padding-left: 25px;
        height: 55px;
        line-height: 55px;
      }
      > div:nth-child(2) {
        font-size: 14px;
        box-sizing: border-box;
        border-radius: 10px;
        padding-left: 25px;
        line-height: 55px;
        background-color: rgb(246, 248, 250);
        padding-bottom: 30px;
      }
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 25px;
        p {
          display: flex;
          align-items: center;
          span {
            &:nth-child(1) {
              font-size: 18px;
            }
            &:nth-child(2) {
              margin-left: 10px;
            }
          }
        }
        img {
          width: 15px;
        }
      }
    }
  }
}
</style>