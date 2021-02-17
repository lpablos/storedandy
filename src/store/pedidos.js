import firebase from "../firestoreConfig";
const db = firebase.firestore();

export default {
  namespaced: true,
  state: {
    a: "Store de pedidos",
    status: false,
    pedido: null,
    error: null,
    horarios: []
  },
  mutations: {
    nuevoPedido(state, newPayload){
      state.pedido = newPayload;
    },
    resetPedido(state){
      state.pedido = null;
      state.error = null;
      state.status = false;
    },
    setHorarios(state, newPayload){
      state.horarios.push(newPayload);
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
    resetOrder: ({ commit }) => commit("resetPedido"),
    getSchedules({ commit }) {
      db.collection("horario entregas")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var item = {
              id: doc.id,
              horario: doc.data().disponibilidad
            };
            commit("setHorarios", item);
          });
        });
    } 
  }
};
