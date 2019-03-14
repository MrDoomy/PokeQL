import path from 'path';
import express from 'express';
import expressGraphQl from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';
import cors from 'cors';
import { json } from 'body-parser';
import typeDefs from './types';
import resolvers from './resolvers';

const resolvePath = (pathName: string) => path.resolve(__dirname, '..', pathName);

/**
 * The Server
 *
 * @class App
 */
export default class App {
  public express: express.Application;

  /**
   * Constructor
   *
   * @class App
   * @constructor
   */
  constructor() {
    this.express = express();
    this.applyMiddleware();
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
}
