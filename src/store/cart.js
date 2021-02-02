import firebase from "../firestoreConfig";
const db = firebase.firestore();

export default {
  namespaced: true,
  state: {
    a: "Carrito de compras",
    cart: []
  },
  getters:{
    getItemsCart: state => {
      return state.cart.forEach();
    }
  },
  mutations: {
    insertBanner(state, payload) {
      state.banners.push(payload);
    },
    addItem(state, payload) {
      var item = state.cart.find(item => item.id === payload.id);
      if (item) {
        item.cantidad = item.cantidad + 1;
      } else {
        var load = {
          id: payload.id,
          product: payload.marca + " " + payload.name,
          price: payload.precio,
          cantidad: 1
        };
        state.cart.push(load);
      }
      console.log(state.cart);
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
    },
    addItemCart: ({ commit }, products) => commit("addItem", products)
  }
};
