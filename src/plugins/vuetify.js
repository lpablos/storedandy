import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import es from "vuetify/lib/locale/es";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { es },
    current: "es"
  },
  icons: {
    iconfont: "fa"
  }
});
