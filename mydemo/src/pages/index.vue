<template>
  <div>
    <el-container>
      <el-header>后台管理项目
         <div v-if="getUserInfo" class="userInfo">
        欢迎  {{getUserInfo.username}} 登录本系统
          <el-button @click="logout" type='danger' size='small'>退出</el-button>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px"> 
          <!-- 引入导航菜单 -->
          <left-nav></left-nav>
        </el-aside>
        <el-main>
          <!-- 二级路由出口 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
// 引入左侧导航组件
import leftNav from '../components/leftnav'
export default {
  data() {
    return {};
  },
  components:{
    leftNav
  },
   computed: {
    ...mapGetters(["getUserInfo"])
  },
  methods: {
    ...mapActions(['changeUserInfoAction']),
    //logout退出事件
    logout(){
      this.changeUserInfoAction(null)
      //退出之后强制跳转登录页
      this.$router.push('/login')
    }
  },
};
</script>

<style lang="stylus" scoped>
@import '../stylus/index.styl'

.el-header 
  background $secondBgColor
  font-size 20px
  line-height 60px
  color #fff
.userInfo
  float right
</style>
