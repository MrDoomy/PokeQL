// FIX: Chalk Import
const chalk = require('chalk');

import path from 'path';
import express from 'express';
import expressGraphQl from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';
import cors from 'cors';
import { json } from 'body-parser';
import typeDefs from './types';
import resolvers from './resolvers';
import { asciiArt } from './constants';

const resolvePath = (pathName: string) => path.resolve(__dirname, '..', pathName);

/**
 * The Server
 *
 * @class App
 */
export default class App {
  public express: express.Application;
  private port: string | number;

  /**
   * Constructor
   *
   * @class App
   * @constructor
   */
  constructor(port: string | number) {
    this.express = express();
    this.applyMiddleware();
    this.port = port;
  }

  /**
   * Apply Middleware
   *
   * @class App
   * @method applyMiddleware
   */
  private applyMiddleware() {
    this.mountSprites();
    this.initGraphQl();
  }

  /**
   * Mount Sprites
   *
   * @class App
   * @method mountSprites
   */
  private mountSprites() {
    this.express.use('/sprites', express.static(resolvePath('public')));
  }

  /**
   * Init GraphQL
   *
   * @class App
   * @method initGraphQl
   */
  private initGraphQl() {
    this.express.use(
      '/graphql',
      cors(),
      json(),
      expressGraphQl({
        graphiql: true,
        schema: makeExecutableSchema({
          typeDefs,
          resolvers
        })
      })
    );
  }

  /**
   * Launch Server
   *
   * @class App
   * @method launchServer
   */
  public launchServer(color = 'white') {
    const log = (text: string) => console.log(text);
    const setChalk = (color: string) => (text: string) => log(chalk[color](text));
    const coloredLog = setChalk(color);

    this.express.listen(this.port, () => {
      coloredLog(asciiArt);
      log(`Listenin' On http://localhost:${this.port}`);
    });
  }
}
