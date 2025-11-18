const bcrypt = require('bcryptjs');
const registerUsuarioModel = require('../models/registerUsuarioModel.js')
const { showPage } = require("../core/utils/pageController.js");
const newPath = "../frontend/pages/home/index.html";

exports.page = showPage(newPath);

exports.login = async function (req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error('\x1b[0mCampos obrigatórios ausentes');
    }

    const user = await registerUsuarioModel.findByEmail(email);

    if (!user) throw new Error('\x1b[0mUsuário não encontrado ou senha incorreta');
    if (user.ativo === 0) throw new Error('\x1b[0mUsuário bloqueado');

    const passwordMatch = await bcrypt.compare(password, user.senha);
    if (!passwordMatch) throw new Error('\x1b[0mUsuário não encontrado ou senha incorreta');

    console.log(`✅ - Login: \x1b[92m${email}\x1b[0m, \x1b[92m${user.senha}\x1b[0m\n`);
    return res.redirect('/pricing');

  } catch (err) {
    console.error('❌ - Login: \x1b[31m$', err ,'\x1b[0m\n');
    return res.redirect('/home?error=db');
  }
}