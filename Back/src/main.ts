// FIX: Chalk Import
const chalk = require('chalk');

import { connect } from 'mongoose';
import App from './App';
import { initDataBase } from './controllers/PkmnCtrl';

const port: string | number = process.env.PORT || 5050;

// New Instance Of Express
const app = new App(port);

const config = {
  host: 'localhost',
  port: 27017,
  db: 'pokedex'
};

const uri: string = `mongodb://${config.host}:${config.port}/${config.db}`;

// Instance Of Mongoose
connect(uri, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  app.launchServer('blue');

  // Init
  initDataBase();

  console.log(chalk.green('\n[MongoDB] Connection Success !'));
})
.catch(() => console.log(chalk.red('\n[MongoDB] Connection Failed !')));
