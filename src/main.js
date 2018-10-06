import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueResource from 'vue-resource';
import service from './service';
// import HelloWorld from '@/components/HelloWorld.vue';
//生成环境提示
Vue.config.productionTip = false;
//全局注册异步组件
Vue.component("HelloWorld",() => import('@/components/HelloWorld.vue'));
Vue.use(VueResource);
Vue.use(service);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
