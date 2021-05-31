import { v4 } from 'uuid';

export default class Hackathon {
    constructor(nome, idade, nota = 0, situacao = 'Em andamento') {
        this.id = v4();
        this.nome = nome;
        this.idade = idade;
        this.nota = nota;

        if(nota >= 5) {
            situacao = 'Aprovado(a)';
        } else {
            situacao = 'Reprovado(a)'
        }

        this.situacao = situacao;
    }

}