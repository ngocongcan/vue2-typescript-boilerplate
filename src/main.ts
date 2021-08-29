import Vue from "vue";
import App from "@/App.vue";
import "@/registerServiceWorker";
import router from "@/router";
import store from "@/store";
import EngvoxKit from "./plugins/engvox.kit";

Vue.prototype.$mapFields = Vue;

Vue.config.productionTip = false;
Vue.use(EngvoxKit);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
