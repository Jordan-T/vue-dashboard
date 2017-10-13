const jsonServer = require('json-server');
const serverConfig = require('./json-server.json');
const db = require('./db.js');
const routes = require('./routes.json');

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.rewriter(routes));
server.use(router);
server.listen(serverConfig.port || 3000, () => {
  console.log(`JSON Server is running on  http://localhost:${serverConfig.port}`);
});
