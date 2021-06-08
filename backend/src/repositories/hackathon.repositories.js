import mongoDatabase from "../database/mongo.database";
import AlunoSchema from '../schemas/aluno.schema';

const alunos = [];

class HackathonRespository {
  inserir(hackathon) {
    mongoDatabase.inserir(hackathon, AlunoSchema, 'aluno');
    alunos.push(hackathon);
  }

  alterar(id, hackathon) {
    const index = alunos.findIndex((a) => a.id === id);
    const aluno = alunos[index];

    const {
      nome,
      sobrenome,
      cpf,
      rg,
      filiacaoMae,
      filiacaoPai,
      nota,
      idade,
      curso,
      situacao,
    } = hackathon;
    aluno.nome = nome;
    aluno.sobrenome = sobrenome;
    aluno.cpf = cpf;
    aluno.rg = rg;
    aluno.filiacaoMae = filiacaoMae;
    aluno.filiacaoPai = filiacaoPai;
    aluno.curso = curso;
    aluno.nota = nota;
    aluno.idade = idade;
    aluno.situacao = situacao;

    if (aluno.nota >= 5) {
      aluno.situacao = "Aprovado(a)";
    } else {
      aluno.situacao = "Reprovado(a)";
    }

    alunos[index] = aluno;

    return hackathon;
  }

  excluir(id) {
    const index = alunos.findIndex((a) => a.id === id);
    mongoDatabase.excluir(id, AlunoSchema, 'aluno');
  }

  listar() {
    return mongoDatabase.listar(AlunoSchema, 'aluno');
  }

  obter(id) {
    const index = alunos.findIndex((a) => a.id === id);
    const aluno = alunos[index];

    alunos[index] = aluno;

    return alunos[index];
  }
}

export default new HackathonRespository();
