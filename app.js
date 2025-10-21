const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const db = require('./src/database/config/db');
const login = require('./src/backend/login.js');

dotenv.config();
const app = express();
const PORT = process.env.PORT;
const testPath = 'src/frontend/pages/test/index.html';
const authPath = 'src/frontend/pages/auth/index.html';
const auth = '/login';

// Para processar formulários
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve arquivos estáticos da pasta public
app.use('/public', express.static(path.join(__dirname, 'src/frontend/public')));

app.get('/', (req, res) => { // Redireciona a raiz "/" para a página de login
  res.redirect(auth);
});

app.get(auth, (req, res) => { // Rota GET para exibir o login
  res.sendFile(path.join(__dirname, authPath));
});

app.use('/', login);

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
