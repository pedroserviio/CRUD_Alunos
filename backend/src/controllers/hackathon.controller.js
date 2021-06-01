import telegramIntegracao from "../../integracao/telegram.integracao";
import Hackathon from "../models/hackathon.model";
import HackathonRespository from "../repositories/hackathon.repositories";
import { Validador } from "../utils/validador.util";

export default class HackathonController {
    async incluir(hackathon) {
        const { nome, sobrenome, curso, idade, filiacaoMae, filiacaoPai, nota, situacao } = hackathon;

        Validador.validarParametro([{ nome }, { sobrenome }, { curso } , { idade }, { filiacaoMae }, { filiacaoPai } , { nota }]);

        const aluno = new Hackathon(nome, sobrenome, curso, idade, filiacaoMae, filiacaoPai, nota, situacao);
        HackathonRespository.inserir(aluno);
        const mensagem = "Aluno inserido com sucesso";
        telegramIntegracao.sendMessage(`${mensagem}: ${aluno.nome}`);

        return { mensagem, id: aluno.id };
    }

    async alterar(id, hackathon) {
        const { nome, sobrenome, curso, idade, filiacaoMae, filiacaoPai, nota } = hackathon

        Validador.validarParametro([{ nome }, { sobrenome }, { curso } , { idade }, { filiacaoMae }, { filiacaoPai } , { nota }]);

        return HackathonRespository.alterar(id, hackathon);
    }

    async excluir(id) {
        return HackathonRespository.excluir(id);
    }

    async obter(id) {
        return HackathonRespository.obter(id);
    }

    async listar() {
        return HackathonRespository.listar();
    }
}