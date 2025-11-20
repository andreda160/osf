module.exports = {
  getAll: `
    SELECT 
      s.id,
      s.nome,
      s.descricao,
      s.duracao,
      s.preco,
      s.foto,
      s.ativo,
      c.categoria AS categoria_nome
    FROM servico s
    JOIN categoria c ON s.categoria_id = c.id
    WHERE s.ativo = 1
    ORDER BY s.id DESC;
  `,

  getById: `
    SELECT 
      s.id,
      s.nome,
      s.descricao,
      s.duracao,
      s.preco,
      s.foto,
      s.ativo,
      c.categoria AS categoria_nome
    FROM servico s
    JOIN categoria c ON s.categoria_id = c.id
    WHERE s.id = ?;
  `
};