import firebase from "../firestoreConfig";
const auth = firebase.auth();

export default {
  namespaced: true,
  state: {
    statusLog: false,
    currentUser: null
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
      state.currentUser = null;
      state.statusLog = false;
    }
  },
  actions: {
    async fetchUser({ commit }, userlog) {
      console.log("se logea");
      await auth
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
        });
    }
  }
};
