import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import xlsx from 'node-xlsx'
Vue.config.productionTip = false;

Vue.use(Antd);

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
// Vue.xlsx = xlsx

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
