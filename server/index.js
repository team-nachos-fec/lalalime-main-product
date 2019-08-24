const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router.js');

const server = express();
const port = 3000;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, '../client/dist')));

server.route('/api', router);

server.listen(port, () => console.log(`Listening on port ${port} woo`));