import ContenedorMongo from "../../contenedores/ContenedorMongo.js";
import config from "../../config.js";

class CarritosDaoMongo extends ContenedorMongo {
  constructor() {
    super(config.CartModel);
  }
}

export default CarritosDaoMongo;
