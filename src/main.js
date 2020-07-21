// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
//引入vant组件信息
import vant from "vant";
import "vant/lib/index.css";

Vue.use(vant);
Vue.prototype.$axios = axios;


import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);


// 请求拦截器
axios.interceptors.request.use(
  config => {
     store.state.loading = true
    //  console.log( store.state.loading )
    return config;
  },
  error => {
    return Promise.error(error);
  }
);

axios.interceptors.response.use(
  response => {
 

    if (response.status === 200) {
      store.state.loading = false
      // console.log(response.status )
      // console.log( store.state.loading )
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  // 服务器状态码不是2开头的的情况
  // 这里可以跟你们的后台开发人员协商好统一的错误状态码
  // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
  // 下面列举几个常见的操作，其他需求可自行扩展
  error => {
    if (error.response.status) {
      return Promise.reject(error.response);
    }
  }
);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
