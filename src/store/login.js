import firebase from "../firestoreConfig";
const auth = firebase.auth();

export default {
  namespaced: true,
  state: {
    currentUser: {}
  },
  getters: {
    getUser(state) {
      return state.currentUser;
    }
  },
  mutations: {
    setCurrentUser(state, user) {
      console.log("setCurrentUser", user);
      state.currentUser = user;
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
    }
  }
};
