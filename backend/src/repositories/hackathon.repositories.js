const alunos = [];

class HackathonRespository {
    inserir(hackathon) {
        alunos.push(hackathon);
    }

    alterar(id, hackathon) {
        const index = alunos.findIndex((a) => a.id === id);
        const aluno = alunos[index];

        const { nome, nota, idade } = hackathon;
        aluno.nome = nome;
        aluno.nota = nota;
        aluno.idade = idade;
        alunos[index] = aluno;

        return hackathon;
    }

    excluir(id) {
        const index = alunos.findIndex((a) => a.id === id);
        alunos.splice(index, 1);
    }

    listar() {
        return alunos;
    }

    obter(id) {
        const index = alunos.findIndex((a) => a.id === id);
        const aluno = alunos[index];

        alunos[index] = aluno;

        return alunos[index];
    }

}

export default new HackathonRespository();