import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.config.productionTip = false;
axios.defaults.baseURL = "http://localhost:80/miscosas/wp-json/";
Vue.use(VueAxios, axios);
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
