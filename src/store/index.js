import Vue from "vue";
import Vuex from "vuex";
import products from "./products";
import banners from "./banners";
import cart from "./cart";
import pedidos from "./pedidos";
import login from "./login";
import createPersistedState from "vuex-persistedstate";
import * as Cookies from "js-cookie";

Vue.use(Vuex);

const dataState = createPersistedState({
  paths: ["login", "cart"],
  key: "dandy-store",
  storage: {
    getItem: (key) => {
      return Cookies.get(key);
    },
    setItem: (key, value) =>
      Cookies.set(key, value, { expires: 365, secure: false }),
    removeItem: key => Cookies.remove(key)
  }
});

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    products,
    banners,
    cart,
    pedidos,
    login
  },
  plugins: [dataState]
});
