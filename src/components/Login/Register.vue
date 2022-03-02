<script setup lang="ts">
import { Platform, Lock, Message } from '@element-plus/icons-vue'
import type { ElForm } from 'element-plus'
import { VerifyCode } from '@/utils/verifyCode';  //引入自定义验证码Hooks
const emit = defineEmits(['changeShow'])
type FormInstance = InstanceType<typeof ElForm>
const ruleFormRef = ref<FormInstance>() //Elmt表单类型和获取
const router = useRouter()
let loading = ref(false)
// 验证码code信息
const code = reactive({
    str: '',
    url: ''
})

// 登录表单数据
const ruleForm = reactive({
    account: '',
    password: '',
    verifyCode: '',
    recomm: ''
})

// 表单_验证码自定义校验
const verifyCodeRules = (rule: any, value: any, callback: any) => {
    if (value.toUpperCase() != code.str) {
        callback(new Error('验证码错误'))
    } else {
        callback()
    }
}

// 表单校验
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
    recomm: [
        {
            required: true,
            message: '推荐码不能为空',
            trigger: 'blur',
        }
    ],
    verifyCode: [
        {
            required: true,
            message: '验证码不能为空',
            trigger: 'blur',
        },
        {
            validator: verifyCodeRules,
            trigger: 'blur'
        }
    ],
})

// 提交表单
const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            loading.value = true
            // 模拟请求
            setTimeout(() => {
                router.push({
                    name: 'Home'
                })
            }, 1000);
        } else {
            console.log('error submit!')
            return false
        }
    })
}

// 挂载时自动渲染
onMounted(() => {
    RefreshCode()
})

// 点击刷新验证码
const RefreshCode = () => {
    const { str, url } = toRefs(VerifyCode(90, 35))
    code.str = str.value
    code.url = url.value

    //将验证码显示在code_img元素上
    const code_img = document.getElementsByClassName('code_img_Register')[0] as HTMLElement
    code_img.style.backgroundImage = `url('${code.url}')`
}

// 前往登陆组件
const goToLogin = () => {
    emit('changeShow')
}

</script>

<template>
    <!-- 注册 -->
    <div id="card">
        <div class="card-left"></div>
        <div class="card-right">
            <div class="top">后台注册入口</div>
            <div class="context">
                <el-form ref="ruleFormRef" class="demo-ruleForm" :model="ruleForm" :rules="rules">
                    <el-form-item prop="account">
                        <el-input
                            v-model="ruleForm.account"
                            placeholder="请输入账号"
                            :prefix-icon="Platform"
                        ></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input
                            v-model="ruleForm.password"
                            placeholder="请输入密码"
                            :prefix-icon="Lock"
                        ></el-input>
                    </el-form-item>
                    <el-form-item prop="recomm">
                        <el-input
                            v-model="ruleForm.recomm"
                            placeholder="请输入推荐码"
                            :prefix-icon="Platform"
                        ></el-input>
                    </el-form-item>
                    <div class="code">
                        <el-form-item prop="verifyCode">
                            <el-input
                                v-model="ruleForm.verifyCode"
                                placeholder="请输入验证码"
                                :prefix-icon="Message"
                            ></el-input>
                        </el-form-item>
                        <div class="code_img_Register" @click="RefreshCode"></div>
                    </div>
                    <el-button type="primary" @click="submitForm(ruleFormRef)" :loading="loading">注册</el-button>
                </el-form>
            </div>
            <div class="footers">
                <span @click="goToLogin">返回登陆 ></span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
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
        background-repeat: no-repeat;
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

            .code {
                display: flex;
                .code_img_Register {
                    width: 90px;
                    height: 35px;
                    margin-left: 10px;
                    cursor: pointer;
                }
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
</style>