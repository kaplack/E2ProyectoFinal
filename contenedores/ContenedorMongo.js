import mongoose from "mongoose";

class ContenedorMongo {
  constructor(schema) {
    this.URL = "mongodb://localhost:27017/coloso";
    this.schema = schema;
  }

  async getAll() {
    try {
      await mongoose.connect(this.URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      let products = await this.schema.find({});
      return products;
    } catch (e) {
      return { error: "error al leer" };
    }
  }

  async save(data) {
    try {
      await mongoose.connect(this.URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      const productModel = new this.schema(data);
      const userSaved = await productModel.save();
      return userSaved;
    } catch (error) {
      return;
    }
  }

  async update(id, data) {
    try {
      await mongoose.connect(this.URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      let productUpdated = await this.schema.findOneAndUpdate(id, {
        ...data,
      });
      return productUpdated;
    } catch (e) {
      return { error: "error al actualizar" };
    }
  }

  async deleteById(itemId) {
    try {
      await mongoose.connect(this.URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      let productDeleted = await this.schema.deleteOne({ id: itemId });
      return productDeleted;
    } catch (e) {
      return { error: "error al eliminar" };
    }
  }
}

export default ContenedorMongo;
