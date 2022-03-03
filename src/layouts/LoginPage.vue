<script setup lang="ts">

const show = ref(true)
const changeShow = () => {
  show.value = !show.value
}

</script>

<template>
  <div id="login">
    <!-- 登陆组件 -->
    <transition
      enter-active-class="animate__animated animate__backInLeft"
      leave-active-class="animate__animated animate__backOutLeft"
    >
      <div v-show="show" class="box">
        <login @changeShow="changeShow" />
      </div>
    </transition>

    <!-- 注册组件 -->
    <transition
      enter-active-class="animate__animated animate__backInLeft"
      leave-active-class="animate__animated animate__backOutLeft"
    >
      <div v-show="!show" class="box">
        <Register @changeShow="changeShow" />
      </div>
    </transition>
  </div>
</template>

<style scoped lang="less">
#login {
  overflow: hidden;
  height: 100vh;
  background-color: antiquewhite;
  background: url("@/assets/loginImgs/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;

  .box {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -250px;
    margin-left: -475px;
  }
}
</style>