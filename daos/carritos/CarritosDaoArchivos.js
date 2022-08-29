import ContenedorArchivo from "../../contenedores/ContenedorArchivo.js";

class CarritosDaoArchivo extends ContenedorArchivo {
  constructor() {
    super("BD/carrito.json");
  }
  async desconectar() {}
}

export default CarritosDaoArchivo;
