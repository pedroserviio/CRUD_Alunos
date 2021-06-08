import mongoose, { Schema } from "mongoose";

class MongoDatabase {
  async connect() {
    mongoose.pluralize(null);
    await mongoose.connect("mongodb://localhost:27017/hackathon", {
      useUnifiedTopology: true,
    });
  }

  async inserir(dado, schema, collection) {
    const model = mongoose.model(collection, schema);
    const session = await model.startSession();
    await model.create([dado], { session });
    session.endSession();
  }

  async listar(schema, collection) {
    const model = mongoose.model(collection, schema);
    return model.find();
  }

  async excluir(id, schema, collection) {
    const model = mongoose.model(collection, schema);
    await model.deleteOne({ id: id });
  }
}

export default new MongoDatabase();
