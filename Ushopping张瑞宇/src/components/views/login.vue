<template>
  <div>
    <div class="page" id="box">
      <header class="headCon">
        <a href="#" class="back"
          ><img src="../../assets/images/arrowLeft (2).jpg" alt=""
        /></a>
        <h2>登录</h2>
        <h2>注册</h2>
      </header>
      <div class="content">
        <div>手机号：<input type="text" v-model="logInfo.tel" /></div>
        <div>密码：<input type="password" v-model="logInfo.pwd" /></div>
        <a href="javascript:;">忘记密码</a>
        <button @click="check">登录</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      logInfo: {
        tel: "",
        pwd: "",
      },
      userInfo: JSON.parse(localStorage.getItem("info"))
        ? JSON.parse(localStorage.getItem("info"))
        : {},
    };
  },
  methods: {
    check() {
      if (this.logInfo.tel === "" || this.logInfo.pwd === "") {
        alert("用户名或密码不能为空");
        return;
      }
      if (this.logInfo.tel !== this.userInfo.tel) {
        alert("该用户不存在");
      } else if (this.logInfo.pwd !== this.userInfo.pwd) {
        alert("密码错误");
      } else {
        alert("登陆成功");
        location.href = "index.html";
      }
    },
  },
};
</script>

<style lang="" scoped>
@import '../../assets/css/login.css'
</style>