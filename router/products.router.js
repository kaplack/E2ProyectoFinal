import express from "express";
import multer from "multer";
import ProductosDaoArchivo from "../daos/productos/ProductosDaoArchivo.js";
import ProductosDaoFirebase from "../daos/productos/ProductosDaoFirebase.js";
import ProductosDaoMongo from "../daos/productos/ProductosDaoMongo.js";

//import Products from "../classes/products.js";

import { Router } from "express";

const data = new ProductosDaoArchivo();
const dataFb = new ProductosDaoFirebase();
const dataMongo = new ProductosDaoMongo();
const routerProduct = Router();

//GET
routerProduct.get("/", async (req, res) => {
  //Archivo
  //const productos = await data.getAll();
  //Firebase
  //const productos = await dataFb.getAll();
  //Mongo
  const productos = await dataMongo.getAll();

  res.send(productos);
});
routerProduct.get("/:id", async (req, res) => {
  let itemId = req.params.id;
  let item = await data.getById(itemId);
  res.send(item);
});

//POST

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });
// const upload = multer({ storage });
const upload = multer();

routerProduct.post("/", upload.none(), async (req, res, next) => {
  // const file = req.file;
  // if (!file) {
  //   const error = new Error("Please upload file");
  //   error.httpStatusCode = 400;
  //   return next(400);
  // }

  let item = {
    name: req.body.title,
    precio: req.body.price,
    description: req.body.description,
    stock: req.body.stock,
    code: req.body.code,
    thumbnail: req.body.thumbnail,
  };
  //Archivo
  //const objetoCreado = await data.save(item);
  //Firebase
  //const docCreado = await dataFb.save(item);
  //Mongo
  const docCreado = await dataMongo.save(item);

  res.send({ docCreado });
});

//PUT

routerProduct.put("/:id", upload.none(), async (req, res) => {
  let itemId = req.params.id;
  const body = req.body;
  test = {
    ...body,
    itemId,
  };

  const itemUpdated = await data.updateById(itemId, body);

  res.send(itemUpdated);
});

//DELETE
routerProduct.delete("/:id", async (req, res) => {
  let itemId = req.params.id;
  const idDeleted = await data.deleteById(itemId);
  res.send({ itemEliminado: idDeleted });
});

export default routerProduct;
