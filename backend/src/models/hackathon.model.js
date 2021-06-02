import { v4 } from 'uuid';

export default class Hackathon {
    constructor(nome, sobrenome, cpf, rg, curso, idade, filiacaoMae, filiacaoPai, cep, numero, complemento, rua, bairro, cidade, estado, nota = 0, situacao = 'Em andamento') {
        this.id = v4();
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.rg = rg;
        this.curso = curso;
        this.idade = idade;
        this.filiacaoMae = filiacaoMae;
        this.filiacaoPai = filiacaoPai;
        this.cep = cep;
        this.numero = numero;
        this.complemento = complemento;
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.nota = nota;

        if(nota >= 5) {
            situacao = 'Aprovado(a)';
        } else {
            situacao = 'Reprovado(a)'
        }

        this.situacao = situacao;
    }

}