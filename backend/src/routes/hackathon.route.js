import express, { json } from "express";
import HackathonController from "../controllers/hackathon.controller";

const router = express.Router();

router.get('/hackathons', async (req, res, next) => {
    const listaAlunos = await new HackathonController().listar();
    res.json(listaAlunos);
});

router.get('/hackathons/:id', async (req, res, next) => {
    const obterId = await new HackathonController().obter(req.params.id);
    
    res.json(obterId);
});

router.post('/hackathons', async (req, res, next) => {
    try {
        const response = await new HackathonController().incluir(req.body);
        res.json(response);
    } catch (error) {
        next(error);
    }
});

router.put('/hackathons/:id', (req, res, next) => {
    new HackathonController().alterar(req.params.id, req.body).then(
        (aluno) => {
            res.json(aluno)
        },
        (err) => {
            next(err);
        },
    );
});

router.delete('/hackathons/:id', (req, res, next) => {
    new HackathonController().excluir(req.params.id).then(
        (aluno) => {
            res.json(aluno)
        },
        (err) => {
            next(err);
        },
    );
});

export default router;