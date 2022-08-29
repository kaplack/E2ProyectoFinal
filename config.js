// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import mongoose from "mongoose";

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEduzICLqccI4sGp2h_JP5YXq8pF8LgVM",
  authDomain: "e2coloso.firebaseapp.com",
  projectId: "e2coloso",
  storageBucket: "e2coloso.appspot.com",
  messagingSenderId: "626270389238",
  appId: "1:626270389238:web:3e10df671d5fa88c3a7dd7",
  measurementId: "G-KTMCKD1ET9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

//mongo
const productSchema = new mongoose.Schema({
  name: { type: String, require: true },
  precio: { type: Number, require: true, max: 100 },
  description: { type: String, require: true, max: 100 },
  stock: { type: Number, require: true, max: 100 },
  code: { type: String, require: true },
  thumbnail: { type: String, require: true },
});

const ProductModel = mongoose.model("products", productSchema);

const cartSchema = new mongoose.Schema({
  user: { type: String, require: true },
  items: { type: String, require: true },
});

const CartModel = mongoose.model("carts", cartSchema);

const config = {
  db: db,
  ProductModel: ProductModel,
  CartModel,
};

export default config;
