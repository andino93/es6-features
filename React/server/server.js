import express from 'express';
import cors from 'cors';
import path from 'path';

const server = express();
const assets = path.join(__dirname, '../client/');
const port = 9800;

server.listen(port, () => console.log(`server is listening on ${port}`));

/* eslint-disable */
const config = require('../webpack.dev.config.js');
const compiler = require('webpack')(config);
server.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));
server.use(require('webpack-hot-middleware')(compiler));
/* eslint-enable */

server.use(express.static(assets));
server.use(cors);
