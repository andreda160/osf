const bcrypt = require("bcryptjs");
const registerUsuarioModel = require("../models/registerUsuarioModel.js");
const { showPage } = require("../core/utils/pageController.js");
const newPath = "../frontend/pages/auth/register/index.html";

exports.page = showPage(newPath);
exports.register = async function (req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).send("Todos os campos são obrigatórios.");
    }

    const existingUser = await registerUsuarioModel.findByEmail(email);
    if (existingUser) {
      return res.status(409).send("Email já cadastrado.");
    }

    const passwordHash = await bcrypt.hash(password, 10);

    await registerUsuarioModel.registerNewUser(name, email, passwordHash);

    console.log(`✅ - Registered: \x1b[92m${email}\x1b[0m, \x1b[92m${passwordHash}\x1b[0m\n`);

    return res.redirect("/pricing");
  } catch (err) {
    console.error("❌ - Register error:", err);
    return res.status(500).send("Erro ao registrar usuário.");
  }
};
