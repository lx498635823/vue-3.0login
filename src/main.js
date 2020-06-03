import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueCompositionApi from "@vue/composition-api";
//自定义全局方法（2.0）
// import global from "./utils/global.js";
// Vue.use(global);
//自定义全局组件（图片）
import "./icons/index.js";
import "./router/premit";
Vue.use(VueCompositionApi);
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
