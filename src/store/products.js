import firebase from "../firestoreConfig";
const db = firebase.firestore();

export default {
  namespaced: true,
  state: {
    a: "Hola mundo",
    status: false,
    productos: []
  },
  mutations: {
    insertItem(state, payload) {
      state.productos.push(payload);
    }
  },
  actions: {
    load({ commit }) {
      db.collection("accesorios")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = {
              id: doc.id,
              name: doc.data().nombre || "Sin informacion",
              color: doc.data().color || "Sin informacion",
              marca: doc.data().marca || "Sin informacion",
              precio: doc.data().precio || "Sin informacion",
              status: doc.data().status || "Sin informacion",
              promocion: doc.data().promocion || "Sin informacion",
              image: doc.data().image ||
               "https://streetspotr.com/wp-content/uploads/2017/08/Out-of-Stock_Titelbild.png"
            };
            commit("insertItem", item);
          });
        });
    }
  }
};
