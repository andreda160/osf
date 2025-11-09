// ---------------------------
// Configuração de ambiente antes de qualquer require
// ---------------------------
process.env.DOTENV_LOG = "false";
require('dotenv').config({ override: true });

// ---------------------------
// Importa a aplicação
// ---------------------------
const app = require('./app');

// ---------------------------
// Inicializa o servidor
// ---------------------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`\n\x1b[90m╭──────────────────────────────\x1b[38;5;153mOsf\x1b[0m\x1b[90m─\x1b[0m\x1b[38;5;153mBarbearia\x1b[0m\x1b[90m──────────────────────────────╮\n│                                                                         │\x1b[0m\n\x1b[92m◆  Server\x1b[0m:                                                                \x1b[90m│\n│\x1b[0m    - \x1b[36mhttp://localhost:${PORT}\x1b[0m                                              \x1b[90m│\n│                                                                         │`);
});