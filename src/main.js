import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//配置axios 配置
import './plugins/axios'
//引入配置路由
import router from './plugins/routers'  
//引入动画
import 'animate.css'
//引入状态管理
import store from './plugins/vuex'

//配置服务端地址
import server from './config/server'
Vue.prototype.baseUrl = server.baseUrl;

new Vue({
  render: h => h(App),
  router:router,
  store
}).$mount('#app')

