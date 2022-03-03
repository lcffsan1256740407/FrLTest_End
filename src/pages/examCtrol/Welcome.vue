<template>
    <div id="welcome">
        <transition
            enter-active-class="animate__animated animate__backInDown"
            leave-active-class="animate__animated animate__backOutLeft"
            @animationend="nextCartoon"
        >
            <span v-show="show.one">欢迎使用考试报名管理系统</span>
        </transition>
        <transition
            enter-active-class="animate__animated animate__fadeInLeft"
            leave-active-class="animate__animated animate__backOutLeft"
            @animationend="nextCartoon"
        >
            <span v-show="show.two"></span>
        </transition>
        <transition
            enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__backOutLeft"
        >
            <span v-show="show.three">Welcome to login.</span>
        </transition>
        <span v-show="!show.three" style="font-size: 16px; opacity: 0;">Welcome to login.</span>
    </div>
</template>

<script lang="ts" setup>
// const span = ref<HTMLElement | null>(null)
const show = reactive({
    one: false,
    two: false,
    three: false
})
onMounted(() => {
    // 开始第一段动画
    nextCartoon()
})
// 动画调用函数
const nextCartoon = () => {
    if (!show.one) {
        console.log('执行第一段动画')
        show.one = true
        return
    } else if (!show.two) {
        console.log('执行第二段动画')
        show.two = true
    } else {
        console.log('执行第三段动画')
        show.three = true
    }
}

</script>

<style lang="less">
// 字体动画效果
@keyframes cartoon {
    from {
        font-size: 16px;
    }
    to {
        font-size: 50px;
    }
}
#welcome {
    height: 100%;
    background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.15) 0%,
            rgba(0, 0, 0, 0.15) 100%
        ),
        radial-gradient(
                at top center,
                rgba(255, 255, 255, 0.4) 0%,
                rgba(0, 0, 0, 0.4) 120%
            )
            #989898;
    background-blend-mode: multiply, multiply;
    font-size: 50px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    :nth-child(1) {
        margin-bottom: 5px;
    }
    :nth-child(2) {
        height: 3px;
        width: 600px;
        background-color: white;
    }
    :nth-child(3) {
        font-size: 16px;
        margin-left: -455px;
    }
    // .addcartoon {
    //     animation: cartoon 1s linear infinite;
    // }
}
</style>