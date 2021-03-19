import firebase from "../firestoreConfig";
const auth = firebase.auth();

export default {
  namespaced: true,
  state: {
    statusLog: false,
    currentUser: {}
  },
  getters: {
    getUser(state) {
      return state.currentUser;
    }
  },
  mutations: {
    setCurrentUser(state, user) {
      state.currentUser = user;
    },
    clearData(state) {
      state.currentUser = {};
      state.statusLog = false;
    }
  },
  actions: {
    fetchUser({ commit }, userlog) {
      console.log("se logea");
      auth
        .signInWithEmailAndPassword(userlog.email, userlog.key)
        .then(user => {
          commit("setCurrentUser", user);
        })
        .catch(error => {
          console.log("Este es el error", error);
        });
    },
    async logOut({ commit }) {
      await auth
        .signOut()
        .then(() => {
          commit("clearData");
        })
        .catch(error => {
          console.log("este es el error de cerrar session", error);
          // An error happened.
        });
    }
  }
};
