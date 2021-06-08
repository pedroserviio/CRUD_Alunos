import app from './src/app';

const PORT = 3000;

const server = app.listen(PORT, 'localhost', () => {
    console.log(`Servidor rodando em ${server.address().port}`)
});