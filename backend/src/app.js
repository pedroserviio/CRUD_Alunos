import express from 'express';
import logger from 'morgan';

import AulaRouter from './routes/aula.route';
import HackathonRouter from './routes/hackathon.route';
import cors from 'cors';
import telegramIntegracao from '../integracao/telegram.integracao';

class App {
    constructor() {
        this.app = express();
        this.integracaoTelegram();
        this.initMiddleware();
        this.routes();
        this.endMiddleware();
    }

    integracaoTelegram() {
        telegramIntegracao.on();
    }

    initMiddleware() {
        this.app.use(cors())
        this.app.use(express.json());
        this.app.use(logger(`dev`, {}));
    }

    routes() {
        this.app.use('/stefanini', AulaRouter);
        this.app.use('/stefanini', HackathonRouter);
    }

    endMiddleware() {
        this.app.use((error, req, res, next) => {
            if(error) {
                res.status(400).json({
                    mensagem: error.message,
                    status: 400
                });
            }

            next();
        });
    }

    database() {
        // conexão
    }
}

export default new App().app;