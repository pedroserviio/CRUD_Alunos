import { v4 } from 'uuid';

export default class Hackathon {
    constructor(nome, idade, nota = 0, isAprovado = false) {
        this.id = v4();
        this.nome = nome;
        this.idade = idade;
        this.nota = nota;

        if(nota >= 5) {
            isAprovado = true;
        }

        this.isAprovado = isAprovado;
    }

}