const express = require('express');
const frontend = express();
const backend = express();
const frontendPort = 3000;
const backendPort = 3001;

frontend.get('/', (req, res) => {
  res.send('Hi user !');
});

backend.get('/', (req, res) => {
  res.json({ user: 'Joël' });
});

frontend.listen(frontendPort, () => {
  console.log(`Debugging cy.contains on frontendPort ${frontendPort}`);
});

backend.listen(backendPort, () => {
  console.log(`Debugging cy.contains on backendPort ${backendPort}`);
});
