import firebase from "../firestoreConfig";
const db = firebase.firestore();

export default {
  namespaced: true,
  state: {
    a: "Hola mundo",
    status: false,
    productos: []
  },
  getters: {
    imagenes: state => id => {
      return state.productos.find(producto => producto.id === id);
    }
  },
  mutations: {
    insertItem(state, payload) {
      state.productos.push(payload);
    },
    async detailImages(state, payload) {
      try {
        var index = await state.productos
          .map(product => product.id)
          .indexOf(payload);
        await db
          .collection("accesorios/" + payload + "/images")
          .get()
          .then(query => {
            query.forEach(doc => {
              var image = {
                id: doc.id,
                image: doc.data().imagen
              };
              state.productos[index].images.push(image);
              // console.log("Este es el valor", state.productos[index].images);
            });
          });
      } catch (e) {
        console.log(e);
      }
    }
  },
  actions: {
    load({ commit }) {
      db.collection("accesorios")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            console.log(doc.data().price);
            var item = {
              id: doc.id,
              name: doc.data().nombre || "Sin informacion",
              color: doc.data().color || "Sin informacion",
              marca: doc.data().marca || "Sin informacion",
              precio: doc.data().precio || "Sin informacion",
              precioItem: doc.data().price,
              status: doc.data().status || "Sin informacion",
              promocion: doc.data().promocion || "Sin informacion",
              image:
                doc.data().image ||
                "https://streetspotr.com/wp-content/uploads/2017/08/Out-of-Stock_Titelbild.png",
              images: []
            };
            commit("insertItem", item);
          });
        });
    },
    async loadImagesItem({ commit }, identy) {
      commit("detailImages", identy);
    }
  }
};
