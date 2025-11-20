module.exports = {
  insertCategoria: `
    INSERT INTO categoria (categoria, descricao)
    VALUES (?, ?);
  `
};