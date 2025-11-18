CREATE TABLE usuario (
  id INT AUTO_INCREMENT PRIMARY KEY,
  pessoa_id INT NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL,
  ativo TINYINT(1) DEFAULT 1,
  historicoAtendimentos TEXT,
  FOREIGN KEY (pessoa_id) REFERENCES pessoa(id)
);