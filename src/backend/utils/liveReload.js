const path = require("path");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");

function setupDevReload(app) {
  try {
    // Cria servidor LiveReload
    const liveReloadServer = livereload.createServer({
      exts: ['html', 'css', 'js'],
      delay: 50,
    });

    // Observa a pasta frontend
    liveReloadServer.watch(path.join(__dirname, "../../frontend"));

    // Middleware para injetar script do livereload
    app.use(connectLivereload());

    // Loga quando o navegador se conecta
    liveReloadServer.server.on("connection", () => {
    });
      //console.log('\n\x1b[90m╭──────────────────────────────\x1b[38;5;153mOsf\x1b[0m\x1b[90m─\x1b[0m\x1b[38;5;153mBarbearia\x1b[0m\x1b[90m──────────────────────────────╮\n│                                                                         │\x1b[0m\n\x1b[92m◆  LiveReload\x1b[0m                                                             \x1b[90m│\n│                                                                         │');
  } catch (err) {
    console.error(err.message);
  }
}

module.exports = setupDevReload;
