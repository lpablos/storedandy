import firebase from "../firestoreConfig";
const db = firebase.firestore();

export default {
  namespaced: true,
  state: {
    a: "Store de pedidos",
    status: false,
    pedidos: []
  },
  mutations: {
    // insertBanner(state, payload) {
    //   state.banners.push(payload);
    // }
    nuevoPedido(){
      console.log("Has añadido el pedido enf firebase");
    }
  },
  actions: {
    async addOrder({ commit }, payload) {
      console.log("Esto es lo recibido", payload.contacto);
      db.collection("pedidos")
        .doc()
        .set({
          conctacto: payload.contacto,
          productos: payload.pedido,
          total: payload.total
        })
        // .then(data =>{
        //   // data.doc.forEach(inf =>{
        //   //   console.log("Dentro de firebase ", inf);
        //   // });
        // })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
      // console.log("Esta es la orden", orderNow.id);
      commit("nuevoPedido");
      // db.collection("banners")
      //   .get()
      //   .then(querySnapshot => {
      //     querySnapshot.forEach(doc => {
      //       var item = {
      //         id: doc.id,
      //         description: doc.data().description,
      //         image:
      //           doc.data().image ||
      //           "https://streetspotr.com/wp-content/uploads/2017/08/Out-of-Stock_Titelbild.png",
      //         name: doc.data().name || "Sin informacion"
      //       };
      //       commit("insertBanner", item);
      //     });
      //   });
    }
  }
};
