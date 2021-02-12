import firebase from "../firestoreConfig";
const db = firebase.firestore();

export default {
  namespaced: true,
  state: {
    a: "Store de pedidos",
    status: false,
    pedidos: [],
    error: null
  },
  mutations: {
    // insertBanner(state, payload) {
    //   state.banners.push(payload);
    // }
    nuevoPedido(state, newPayload){
      state.pedidos.push(newPayload);
      console.log("Esta es la carga", state.pedidos);
    }
  },
  actions: {
    async addOrder({ commit }, payload) {
      db.collection("pedidos")
        .add({
          conctacto: payload.contacto,
          productos: payload.pedido,
          total: payload.total
        })
        .then(function(docRef) {
          var newPayload = {
            identy: docRef.id,
            conctacto: payload.contacto,
            productos: payload.pedido,
            total: payload.total
          }
          commit("nuevoPedido", newPayload);
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
    }
  }
};
