import firebase from "../firestoreConfig";
// const db = firebase.firestore();
const auth = firebase.auth();

export default {
  namespaced: true,
  state: {
    // a: "Carrito de compras",
    // cart: []
  },
  getters: {
    // getItemsCart: state => {
    //   return state.cart.length;
    // },
    // getTotalCart: state => {
    //   if (state.cart.length > 0) {
    //     var sumatoria = 0;
    //     state.cart.forEach(item => {
    //       sumatoria += item.priceItem * item.cantidad;
    //     });
    //     return sumatoria;
    //   } else {
    //     console.log("no cumple ");
    //     return 0;
    //   }
    // }
  },
  mutations: {
    // insertBanner(state, payload) {
    //   state.banners.push(payload);
    // },
    // addItem(state, payload) {
    //   console.log(payload);
    //   var item = state.cart.find(item => item.id === payload.id);
    //   if (item) {
    //     item.cantidad = item.cantidad + 1;
    //   } else {
    //     var load = {
    //       id: payload.id,
    //       product: payload.marca + " " + payload.name,
    //       price: payload.precio,
    //       priceItem: payload.precioItem,
    //       cantidad: 1
    //     };
    //     state.cart.push(load);
    //   }
    // },
    // resetCart(state) {
    //   state.cart = [];
    // }
    saluda() {
      console.log("saluda");
    }
  },
  actions: {
    logeo({ commit }, credential) {
      console.log(credential);
      console.log("Entraste al store de login",);
      console.log(credential.email, credential.key);
      auth
        .createUserWithEmailAndPassword(credential.email, credential.key)
        .then(user => {
          console.log(user);
        })
        .catch(error => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ..
        });
      commit("saluda");
    }
  }
};
