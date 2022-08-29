import express from "express";
//import ProductosDaoArchivo from "./daos/productos/ProductosDaoArchivo.js";
//import ContenedorArchivo from "./contenedores/ContenedorArchivo.js";
import routerProduct from "./router/products.router.js";
import routerCart from "./router/cart.router.js";

const app = express();

//const productos = new ProductosDaoArchivo();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));

app.use("/productos", routerProduct);
app.use("/carrito", routerCart);

// app.get("/", async (req, res) => {
//   try {
//     const all = await productos.listarAll();
//     res.json(all);
//   } catch (err) {}
//   return;
// });

app.listen(8080);
