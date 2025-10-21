const express = require('express');
const path = require('path');
const crypto = require('crypto');
const db = require('../database/config/db'); // ajusta o caminho conforme sua pasta
const router = express.Router();

// Caminho para o HTML da home (pode vir por parâmetro também)
const homePath = 'src/frontend/pages/home/index.html';
const home = '/home';

// Rota POST para processar o login
router.post('/login', (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.send(`<h3 style="color:red;">E-mail ou senha inválida</h3><a href="/login">Voltar</a>`);
  }

  const senhaHash = crypto.createHash('md5').update(senha).digest('hex');

  const sql = 'SELECT * FROM usuario WHERE email = ? AND senha = ?';
  db.query(sql, [email, senhaHash], (err, results) => {
    if (err) return res.send('Erro no banco de dados.');

    if (results.length === 0) {
      return res.send(`<h3 style="color:red;">Email ou senha inválida</h3><a href="/login">Voltar</a>`);
    }

    const user = results[0];
    if (user.ativo === 0) {
      return res.send(`<h3 style="color:orange;">Usuário bloqueado. Contate o administrador.</h3><a href="/login">Voltar</a>`);
    }

    // ✅ Login bem-sucedido → redireciona para /home
    return res.redirect('/home');
  });
});

// ✅ Nova rota GET para /home (exibe a página home)
router.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, '../../', homePath));
});

module.exports = router;
