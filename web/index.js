import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { createServer } from 'http';
import withGracefulShutdown from 'http-shutdown';
import { ApolloServer } from 'apollo-server-express';
import once from 'lodash/once';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/schemas';
import config from '../config';
import indexRouter from './routes/index';
import models from '../database/models';

const app = express();
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models },
});
apolloServer.applyMiddleware({ app });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});
const startServer = once(() => {
  console.log(config);
  const message = config.isDevelopment
    ? `\n\n  [Force] Booting on port ${config.server.port}... \n`
    : `\n\n  [Force] Started on ${config.server.appUrl}. \n`;
  const server = withGracefulShutdown(createServer(app));
  const stopServer = once(() => {
    server.shutdown(() => {
      console.log('Closed existing connections.');
      process.exit(0);
    });
  });

  // if (KEEPALIVE_TIMEOUT_SECONDS) {
  //   console.log(
  //     "Setting keepAliveTimeout to " + KEEPALIVE_TIMEOUT_SECONDS + " sec."
  //   )
  //   server.keepAliveTimeout = Number(KEEPALIVE_TIMEOUT_SECONDS) * 1000
  // }

  // if (HEADERS_TIMEOUT_SECONDS) {
  //   console.log(
  //     "Setting headersTimeout to " + HEADERS_TIMEOUT_SECONDS + " sec."
  //   )
  //   server.headersTimeout = Number(HEADERS_TIMEOUT_SECONDS) * 1000
  // }
  server.listen(config.server.port, '0.0.0.0', () => console.log(message));
  process.on('SIGTERM', stopServer);
});

models.sequelize.authenticate();
models.sequelize.sync().then(() => {
  startServer();
});
