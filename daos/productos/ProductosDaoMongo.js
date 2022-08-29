import ContenedorMongo from "../../contenedores/ContenedorMongo.js";
import config from "../../config.js";

class ProductosDaoMongo extends ContenedorMongo {
  constructor() {
    super(config.ProductModel);
  }
}

export default ProductosDaoMongo;
