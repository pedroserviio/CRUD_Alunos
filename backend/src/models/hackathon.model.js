import { v4 } from 'uuid';

export default class Hackathon {
    constructor(nome, sobrenome, curso, idade, filiacaoMae, filiacaoPai, nota = 0, situacao = 'Em andamento') {
        this.id = v4();
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.curso = curso;
        this.idade = idade;
        this.filiacaoMae = filiacaoMae;
        this.filiacaoPai = filiacaoPai;
        this.nota = nota;

        if(nota >= 5) {
            situacao = 'Aprovado(a)';
        } else {
            situacao = 'Reprovado(a)'
        }

        this.situacao = situacao;
    }

}