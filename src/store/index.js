import Vue from "vue";
import Vuex from "vuex";
import products from "./products";
import banners from "./banners";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    products,
    banners
  }
});
