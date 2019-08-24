const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const server = express();
const port = 3000;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, '../client/dist')));

server.listen(port, () => console.log(`Listening on port ${port} woo`));