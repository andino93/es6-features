import express from 'express';
import path from 'path';
import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.dev.config';

const server = express();
const assets = path.join(__dirname, '../client/');
const port = 3000;

server.listen(port, () => console.log(`server is listening on ${port}`));

/* eslint-disable */
const compiler = webpack(config);
server.use(devMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));
server.use(hotMiddleware(compiler));
/* eslint-enable */

server.use(express.static(assets));
