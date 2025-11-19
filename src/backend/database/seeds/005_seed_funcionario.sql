INSERT INTO pessoa (nome, foto)
VALUES ('Admin Sistema', NULL);

INSERT INTO usuario (pessoa_id, email, senha, ativo, historicoAtendimentos)
VALUES (
    LAST_INSERT_ID(),
    'sadasdsad@gmail.com',
    'sdasdasdsa', /*senha123*/
    1,
    NULL
);

INSERT INTO funcionario (usuario_id, agenda, cargo)
VALUES (
    LAST_INSERT_ID(),
    '{}',
    'admin'
);