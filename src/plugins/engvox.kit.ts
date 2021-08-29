/* eslint-disable */
import BootstrapVue from "bootstrap-vue";
// import vuePerfectScrollbar from "vue-perfect-scrollbar";
// import VueTour from "vue-tour";
// import SmartTable from "vuejs-smart-table";
// import VueTagsInput from "@johmun/vue-tags-input";
// import VueTheMask from "vue-the-mask";
// import Vuelidate from "vuelidate";
// import VueFormWizard from "vue-form-wizard";
// import VueLazyload from "vue-lazyload";
// import VCalendar from "v-calendar";
// import VueGoodTablePlugin from "vue-good-table";
// import VueSlider from "vue-slider-component";
// import Meta from "vue-meta";
// import FlagIcon from "vue-flag-icon";

import "@/assets/styles/sass/themes/lite-purple.scss";
// import "@/plugins/echarts";
// import "@/plugins/apexChart.js";
// import "@/plugins/sweetalert2.js";

// locale.use(lang);

export default class EngvoxKit {
  /*
  * Installs the Vue plugin.
  */

  static install(Vue: any, options = {}):void {
    Vue.use(BootstrapVue);
  }
}

/*
* The plugin is automatically installed when loaded in browser (not as module).
*/
if (typeof window !== 'undefined' && !!window.Vue) {
  window.Vue.use(EngvoxKit);
}
