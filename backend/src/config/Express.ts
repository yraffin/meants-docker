import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as health from 'express-ping';
import * as glob from 'glob';

import { useContainer, useExpressServer } from 'routing-controllers';
import { Container } from 'typedi';

import { setupLogging } from './Logging';
import { setupSwagger } from './Swagger';
import { setupAuth } from './authentication';
import * as compression from 'compression';

/**
 * Represents the express configuration.
 * @class
 */
export class ExpressConfig {

  /** The express application. @property {express.Express} */
  app: express.Express;

  /**
   * Initializes a new instance of the ExpressConfig class.
   * @constructor
   */
  constructor() {
    this.app = express();

    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(health.ping());

    // use compression
    this.app.use(compression());

    // Setup routes
    this.setupExpressServer();
    setupLogging(this.app);
    setupAuth(this.app);

    setupSwagger(this.app);
  }

  /**
   * Setup express server.
   * @method
   */
  setupExpressServer() {
    // setup DI Container
    useContainer(Container);

    // gets specifical directories
    const controllerDirs = glob.sync(path.resolve('dist/**/*Controller.js'));
    const middlewaresDirs = glob.sync(path.resolve('dist/**/*Middleware.js'));

    useExpressServer(this.app, {
      routePrefix: '/api',
      defaultErrorHandler: false,
      enableValidation: true,
      controllers: controllerDirs,
      middlewares: middlewaresDirs
    });
  }
}
