import firebase from "../firestoreConfig";
const db = firebase.firestore();

export default {
  namespaced: true,
  state: {
    a: "Hola mundo",
    status: false,
    banners: []
  },
  mutations: {
    insertBanner(state, payload) {
      state.banners.push(payload);
    }
  },
  actions: {
    load({ commit }) {
      db.collection("banners")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = {
              id: doc.id,
              description: doc.data().description,             
              image: doc.data().image || "https://streetspotr.com/wp-content/uploads/2017/08/Out-of-Stock_Titelbild.png",
              name: doc.data().name || "Sin informacion",
            };
            commit("insertBanner", item);
          });
        });
    }
  }
};
