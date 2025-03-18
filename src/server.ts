import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

import testRoutes from './routes/teste'; // Importações no início

dotenv.config(); // Configurar variáveis de ambiente

const app = express(); // Criar a instância do express

app.use(express.json()); // Middleware para JSON

app.use('/api', testRoutes); // Definir as rotas após instanciar o app

// Mensagem simples na rota raiz
app.get('/', (req, res) => {
  res.send('Servidor rodando! 🚀');
});


// Configurar o Express para servir arquivos estáticos da pasta 'pages'
app.use(express.static(path.join(__dirname, 'pages')));
app.use(express.static(path.join(__dirname, '../pages')));
app.use('/assets', express.static(path.join(__dirname, '/assets')));


// Rota para exibir o arquivo HTML inicial em um caminho específico
app.get('/principal', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/pages/index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em  http://localhost:${PORT}/principal`);
});
