import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "../src/firestoreConfig";
const auth = firebase.auth();
import vuetify from "./plugins/vuetify";
import "@babel/polyfill";

Vue.config.productionTip = false;

// firebase.auth().onAuthStateChanged(user => {
//   store.dispatch("login/fetchUser", user);
// });

// new Vue({
//   router,
//   store,
//   vuetify,
//   render: h => h(App)
// }).$mount("#app");

let app;
auth.onAuthStateChanged(user => {
  console.log("Se verifico el usuario", user);
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount("#app");
  }
});
