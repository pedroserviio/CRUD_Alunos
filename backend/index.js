import app from './src/app';

const PORT = 3000;

const server = app.listen(PORT, 'localhost', () => {
    console.log(`Server running at ${server.address().port}`)
});