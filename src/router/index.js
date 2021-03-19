import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Admin from "../views/Admin.vue";
import firebase from "../firestoreConfig";
const auth = firebase.auth();
// import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/"
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/admin/login",
    name: "Login",
    component: Login
  },
  {
    path: "/admin/index",
    name: "Admin",
    component: Admin,
    meta: {
      authRequired: true
    }
  },
  {
    path: "/admin/indexx",
    name: "Admin",
    component: Admin,
    meta: {
      authRequired: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.authRequired);
  const currentUser = auth.currentUser;
  if (requiresAuth && currentUser) next({ name: "Admin" });
  else next();
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.authRequired)) {
//     // if (firebase.auth().currentUser) {
//     if (store.state.login.user.loggedIn || firebase.auth().currentUser){
//       // alert("Estas logeado");
//       next();
//     } else {
//       // alert("You must be logged in to see this page");
//       next({
//         path: "/"
//       });
//     }
//   } else {
//     next();
//   }
// });

export default router;
