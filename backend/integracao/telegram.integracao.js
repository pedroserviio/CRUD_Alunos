require('dotenv').config();
import TelegramBot from 'node-telegram-bot-api';
import axios from 'axios'

const token = process.env.token;
const bot = new TelegramBot(token, { polling: true });

const chats = [];

class TelegramIntegracao {

  constructor() { }

  on() {
    bot.onText(/registrar/, (msg, match) => {
      chats.push(msg.chat.id);
      bot.sendMessage(msg.chat.id, 'Registro realizado com sucesso!');
    });

    bot.on('message', (msg) => {
      console.log(msg)
    });

    /*
    bot.onText(/acao/, async (msg, match) => {
      const res = await axios('http://cotacao.b3.com.br/mds/api/v1/instrumentQuotation/ibov');

      bot.sendMessage(msg.chat.id, res.data.Trad[0].scty.SctyQtn.curPrc);
    });
    */
  }

  sendMessage(msg) {
    chats.forEach((id) => {
      bot.sendMessage(id, msg)
    });
  }
}

export default new TelegramIntegracao;
