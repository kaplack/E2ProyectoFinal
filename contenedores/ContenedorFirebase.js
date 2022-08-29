import config from "../config.js";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

class ContenedorFirebase {
  constructor(coll) {
    this.database = config.db;
    this.coll = coll;
  }

  async getAll() {
    const querySnapshot = await getDocs(collection(config.db, this.coll));
    const result = querySnapshot.docs.map(
      (doc) => (doc = { id: doc.id, ...doc.data() })
    );
    return result;
  }

  async save(data) {
    const col = collection(config.db, this.coll);
    const order = await addDoc(col, data);
    return order;
  }

  async update(id, data) {
    try {
      const docRef = doc(config.db, this.coll, id);
      await updateDoc(docRef, { ...data });
    } catch (error) {
      return { error };
    }
  }

  async delById(id) {
    try {
      await deleteDoc(doc(config.db, this.coll, id));
    } catch (error) {
      return { error };
    }
  }
}

export default ContenedorFirebase;
