<template>
  <div class="login">
    <el-form
      :model="loginForm"
      :rules="rules"
      label-width="100px"
      ref="loginForm"
      class="loginForm"
    >
      <el-form-item>
        <h3>欢迎登录</h3>
      </el-form-item>
      <el-form-item label="用户名:" prop="username">
        <el-input v-model="loginForm.username" clearable></el-input>
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input
          v-model="loginForm.password"
          clearable
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import { getUserInfo, getUserLogin } from "../util/axios";
export default {
  data() {
    return {
      // 表单输入参数
      loginForm: {
        username: "",
        password: "",
      },
      // 规则验证
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 18,
            message: "长度在 6 到 18 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    ...mapActions(['changeUserInfoAction']),
    login(formName) {
      //validate验证
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //登录逻辑
          getUserLogin(this.loginForm)
          .then((res) => {
            if (res.data.code == 200) {
              this.$message.success(res.data.msg);
              this.changeUserInfoAction(res.data.list)
              this.$router.push("/home");
            } else {
              this.$message.error(res.data.msg);
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../stylus/index.styl';

.login {
  width: 100vw;
  height: 100vh;
  background: $fristBgColor;

  .loginForm {
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -170px 0 0 -240px;
    width: 400px;
    height: 220px;
    padding: 35px 10px;
    border: 1px solid black;
  }
}
</style>
