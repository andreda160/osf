const path = require("path");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");

function setupDevReload(app) {
  const liveReloadServer = livereload.createServer();
  liveReloadServer.watch(path.join(__dirname, "../frontend"));

  liveReloadServer.server.once("connection", () => {
    setTimeout(() => liveReloadServer.refresh("/"), 100);
  });

  app.use(connectLivereload());
}

module.exports = setupDevReload;
