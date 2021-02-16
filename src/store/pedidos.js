import firebase from "../firestoreConfig";
const db = firebase.firestore();

export default {
  namespaced: true,
  state: {
    a: "Store de pedidos",
    status: false,
    pedido: null,
    error: null
  },
  mutations: {
    nuevoPedido(state, newPayload){
      state.pedido = newPayload;
      console.log(state.pedido);
    },
    resetPedido(state){
      state.pedido = null;
      state.error = null;
      state.status = false;
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
    },
    resetOrder: ({ commit }) => commit("resetPedido")
  }
};
