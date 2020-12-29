import firebase from "../firestoreConfig";

const db = firebase.collection("accesorios");

class AccesorioDataService {
  getAll() {
    return db;
  }

  create(tutorial) {
    return db.add(tutorial);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }
}

export default new AccesorioDataService();
