import firebase from "../firestoreConfig";
// const db = firebase.firestore();
const auth = firebase.auth();

export default {
  namespaced: true,
  state: {
    user: {
      loggedIn: false,
      data: null,
      success: 0, // 1.Login 2. Fail 0. Nada
      message: ""
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    loginStatus(state) {
      return state.user.loggedIn;
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },
    SET_STATUS(state, data) {
      state.user.success = data;
    },
    SET_MESSAGE(state, data) {
      state.user.message = data;
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      console.log("credenciales", user);
      auth
        .signInWithEmailAndPassword(user.email, user.key)
        .then(user => {
          commit("SET_LOGGED_IN", user !== null);
          if (user) {
            commit("SET_USER", {
              displayName: user.displayName,
              email: user.email
            });
            commit("SET_STATUS", 1);
          } else {
            commit("SET_USER", null);
            commit("SET_STATUS", 2);
          }
        })
        .catch(error => {
          commit("SET_STATUS", 2);
          commit("SET_MESSAGE", error.messag);
        });
    }
  }
};
