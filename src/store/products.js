import firebase from "../firestoreConfig";
const db = firebase.firestore();

export default {
  namespaced: true,
  state: {
    a: "Hola mundo",
    producto: []
  },
  mutations: {
    insertItem(state, payload){
      state.producto.push(payload);
    }
  },
  actions: {
    load({ commit }) {
      db.collection("accesorios")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            const item = {
              id: doc.id,
              name: doc.data().nombre || "Sin informacion",
              color: doc.data().color || "Sin informacion",
              marca: doc.data().marca || "Sin informacion",
              precio: doc.data().precio || "Sin informacion",
              status: doc.data().status || "Sin informacion",
              promocion: doc.data().promocion || "Sin informacion"
            };
            commit("insertItem", item);
          });
        });
    }
  }
};
