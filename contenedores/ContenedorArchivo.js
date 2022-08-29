import { promises as fs } from "fs";

class ContenedorArchivo {
  constructor(ruta) {
    this.ruta = ruta;
  }

  async getById(id) {
    const objs = await this.getAll();
    //console.log(objs);
    const buscado = objs.find((o) => o.id == id);
    return buscado;
  }

  async getAll() {
    //console.log(this.ruta);
    try {
      const objs = await fs.readFile(this.ruta);
      //console.log(JSON.parse(objs));
      return JSON.parse(objs);
    } catch (error) {
      return [];
    }
  }

  async save(elem) {
    try {
      let objs = await fs.readFile(this.ruta);
      objs = JSON.parse(objs);
      let ids = objs.map((el) => el.id);
      const newId = parseInt(Math.max(...ids) + 1);
      const item = {
        ...elem,
        id: newId,
      };
      objs.push(item);
      console.log(objs);
      objs = JSON.stringify(objs);
      fs.writeFile(this.ruta, objs, (error) => {
        if (error) {
          console.log("error al escribir el archivo", error);
        } else {
          console.log("guardado");
        }
      });
      return item;
    } catch (error) {
      console.log("error al leer");
    }
  }

  async updateById(id, elem) {
    try {
      let objs = await fs.readFile(this.ruta);
      objs = JSON.parse(objs);
      objs = objs.filter((el) => el.id != id);
      const item = {
        ...elem,
        id,
      };
      objs.push(item);
      objs = JSON.stringify(objs);
      fs.writeFile(this.ruta, objs, (error) => {
        if (error) {
          console.log("error al escribir el archivo", error);
        } else {
          console.log("updated");
        }
      });
      return id;
    } catch (error) {
      console.log("error al leer");
    }
  }

  async deleteById(id) {
    try {
      let objs = await fs.readFile(this.ruta);
      objs = JSON.parse(objs);
      objs = objs.filter((el) => el.id != id);
      objs = JSON.stringify(objs);
      fs.writeFile(this.ruta, objs, (error) => {
        if (error) {
          console.log("error al escribir el archivo", error);
        } else {
          console.log("guardado");
        }
      });
      return id;
    } catch (error) {
      console.log("error al leer");
    }
  }
}

export default ContenedorArchivo;
