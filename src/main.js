import Vue from 'vue'
import App from './App.vue'
import './index.css'
// import store from "./store/store";
// import router from "./router/index";

// import 'tw-elements';
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { far } from "@fortawesome/free-regular-svg-icons";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// import { vfmPlugin } from 'vue-final-modal'
// import VueApexCharts from 'vue-apexcharts'
// import VFolder from 'v-folder';
// import { VueRecaptcha } from 'vue-recaptcha';
// import VueRecaptcha from 'vue-recaptcha'

{/* <script src="https://www.google.com/recaptcha/api.js" async defer></script> */}




// library.add(fas, far, fab);
// Vue.component('font-awesome-icon', FontAwesomeIcon)
// Vue.use(VueApexCharts)
// Vue.use(vfmPlugin)
// Vue.use(VFolder)
// Vue.use(VueRecaptcha)

// eslint-disable-next-line
// vue/multi-word-component-names
// Vue.component('apex-chart', VueApexCharts)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
