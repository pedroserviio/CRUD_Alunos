import { Schema } from "mongoose";

class AlunoSchema {
  constructor() {
    this.schema = new Schema({
      id: {
        type: String,
        require: true,
      },
      nome: {
        type: String,
        require: true,
      },
      sobrenome: {
        type: String,
        require: true,
      },
      cpf: {
        type: String,
        require: true,
      },
      rg: {
        type: String,
        require: true,
      },
      curso: {
        type: String,
        require: true,
      },
      idade: {
        type: Number,
        require: true,
      },
      filiacaoMae: {
        type: String,
        require: true,
      },
      filiacaoPai: {
        type: String,
        require: true,
      },
      cep: {
        type: String,
        require: true,
      },
      numero: {
        type: Number,
        require: true,
      },
      complemento: {
        type: String,
        require: true,
      },
      rua: {
        type: String,
        require: true,
      },
      bairro: {
        type: String,
        require: true,
      },
      cidade: {
        type: String,
        require: true,
      },
      estado: {
        type: String,
        require: true,
      },
      nota: {
        type: Number,
        require: true,
      },
      situacao: {
        type: String,
        require: true,
      },
    });
  }
}

export default new AlunoSchema().schema;
