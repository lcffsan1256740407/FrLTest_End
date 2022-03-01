<script setup lang="ts">
import { Platform, Lock } from '@element-plus/icons-vue'
import type { ElForm } from 'element-plus'
type FormInstance = InstanceType<typeof ElForm>
const formSize = ref('')
const ruleFormRef = ref<FormInstance>()

// 登录表单数据
const ruleForm = reactive({
  account: '',
  password: ''
})
// 登录表单校验
const rules = reactive({
  account: [
    {
      required: true,
      message: '账号不能为空',
      trigger: 'blur',
    }
  ],
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur',
    }
  ],
})
// 提交表单
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}
const show = ref(false)
</script>

<template>
  <div id="login">
    <button  @click="()=>{show=!show}">123</button>
    <transition
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <div id="card"  v-if="show">
        <div class="card-left"></div>
        <div class="card-right">
          <div class="top">外语考试报名后台系统</div>
          <div class="context">
            <el-form
              ref="ruleFormRef"
              class="demo-ruleForm"
              :model="ruleForm"
              :rules="rules"
              :size="formSize"
            >
              <el-form-item prop="account">
                <el-input v-model="ruleForm.account" placeholder="请输入账号" :prefix-icon="Platform"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  v-model="ruleForm.password"
                  placeholder="请输入密码"
                  show-password="true"
                  :prefix-icon="Lock"
                ></el-input>
              </el-form-item>
              <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
            </el-form>
          </div>
          <div class="footers">
            <span>忘记密码</span>
            <span>立即注册</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped lang="less">
#login {
  height: 100vh;
  background-color: antiquewhite;
  display: flex;
  align-items: center;
  justify-content: center;
  #card {
    width: 950px;
    height: 500px;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 10px;
    display: flex;
    overflow: hidden;
    box-shadow: 1px 1px 5px rgb(163, 160, 160);
    .card-left {
      background-image: url("@/assets/loginImgs/loginPage.jpg");
      background-size: cover;
      width: 55%;
    }
    .card-right {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .top {
        font-size: 24px;
        color: #586769;
        margin-bottom: 50px;
      }
      .context {
        width: 300px;
        &:deep(.el-input__inner) {
          height: 35px;
        }
        &:deep(.el-form-item__error) {
          margin: 1px 3px;
        }
        .el-button {
          margin-top: 10px;
          padding: 20px 0;
          width: 100%;
          font-size: 16px;
          letter-spacing: 8px;
        }
      }
      .footers {
        width: 100%;
        margin-top: 10px;
        display: flex;
        justify-content: flex-end;
        padding-right: 55px;
        span {
          cursor: pointer;
          float: right;
          padding-right: 10px;
          margin-top: 30px;
          font-size: 13px;
          // color: rgb(42, 159, 243);
          &:hover {
            color: rgb(64, 158, 255);
          }
        }
      }
    }
  }
}
</style>