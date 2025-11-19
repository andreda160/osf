module.exports = {
  getCargo: `
    SELECT cargo
    FROM funcionario
    WHERE usuario_id = ?
    LIMIT 1;
  `
};