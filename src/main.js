import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import tree from '@/components/tree/index.js'
Vue.use(tree)

Vue.config.productionTip = false;


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
