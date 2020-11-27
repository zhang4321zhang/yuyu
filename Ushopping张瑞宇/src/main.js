// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入vuex状态管理
import store from './store'
// 全局引入element-ui
import ElementUI from 'element-ui'
// 引入elementUIcss样式
import 'element-ui/lib/theme-chalk/index.css'
// 全局引入rem.js文件
import './assets/js/remScale'
// 全局引入重置css文件
import './assets/css/reset.css'
import './assets/css/public.css'
// 调用插件
Vue.use(ElementUI)
// 给Vue原型挂载一个服务器地址
Vue.prototype.$imgUrl = 'http://localhost:3000'
Vue.config.productionTip = false

//引入vantUi框架
import VantUI from 'vant'
Vue.use(VantUI)
import 'vant/lib/index.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

