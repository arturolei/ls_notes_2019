const express = require('express');
const server = express();

//Routers
const actionsRouter = require('./routers/actionsRouter.js');
const projectsRouter = require('./routers/projectsRouter.js');


server.use(express.json());

server.use('/api/projects', projectsRouter);
server.use('/api/actions',actionsRouter);


server.get('/', (req, res) => {
    res.send(`<h2>The server is alive!!!</h2>`)
  });

module.exports = server;