const db = require('../core/config/dbConnection');
const usuarioQuery = require('../database/queries/usuarioQuery.js');

async function findByEmailAndSenha(email, senhaHash) {
  const [rows] = await db.promise().query(usuarioQuery.findByEmailAndSenha, [email, senhaHash]);
  return rows[0];
}

module.exports = { findByEmailAndSenha };