<template>
  <div>
    <!-- 导航菜单 -->
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      unique-opened
      router
    >
      <el-menu-item index="/home">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-submenu :index="item.id.toString()" v-for="item in getUserInfo.menus" :key='item.id'>
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.title}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index="menu.url" v-for="menu in item.children" :key='menu.id'>{{menu.title}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  data() {
    return {
      defaultActive:'/home'
    };
  },
  mounted(){
    // 组件一加载救会触发挂载
    this.defaultActive=this.$route.path
    // 组件一加载救会触发action
    // this.getMenuList()
  },
  computed:{
    // ...mapGetters({
    //   menuList:'menu/getMenuList'
    // })
    ...mapGetters(['getUserInfo'])
  },
  methods:{
    // ...mapActions({
    //   getMenuList:'menu/getMenuListAction'
    // })
  }
};
</script>

<style lang="stylus" scoped>
.el-menu 
  min-height 92vh

</style>
