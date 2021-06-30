import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import dateFilter from "@/filters/date.filter";
import currencyFilter from "@/filters/currency.filter";
import messagePlugin from "@/utils/message.plugin";
import Loader from '@/components/app/Loader'
import "materialize-css/dist/js/materialize.min";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter("date", dateFilter);
Vue.filter("currency", currencyFilter);
Vue.component('Loader', Loader)

firebase.initializeApp({
  apiKey: "AIzaSyCMCecYIpkb8xzBfPvG1c5AXcFeRHgSjeU",
  authDomain: "vue-crm-6cb76.firebaseapp.com",
  projectId: "vue-crm-6cb76",
  storageBucket: "vue-crm-6cb76.appspot.com",
  messagingSenderId: "696878398631",
  appId: "1:696878398631:web:44bfd6dc54951011156f82",
  measurementId: "G-Y03289WREP"
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
