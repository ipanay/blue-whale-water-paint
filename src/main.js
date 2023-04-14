import Vue from 'vue'
import App from './App.vue'
import {store} from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false
const a = 9;
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
