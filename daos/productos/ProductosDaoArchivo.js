import ContenedorArchivo from "../../contenedores/ContenedorArchivo.js";

class ProductosDaoArchivo extends ContenedorArchivo {
  constructor() {
    super("BD/productos.json");
  }
  // async getAll() {
  //   //console.log(await this.listarAll());
  //   return await this.listarAll();
  // }
  //async desconectar() {}
}

export default ProductosDaoArchivo;
