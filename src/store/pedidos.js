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
  },
  actions: {
    addOrder() {
      db.collection("cities")
        .doc()
        .set({
          name: "Los Angeles",
          state: "CA",
          country: "USA"
        });
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
