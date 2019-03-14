// FIX: Chalk Import
const chalk = require('chalk');

import { connect } from 'mongoose';
import App from './App';
import { initDataBase } from './controllers/PkmnCtrl';

// New Instance Of Express
const app = new App().express;

const config = {
  host: 'localhost' as string,
  port: '27017' as string,
  db: 'pokedex' as string
};

const uri: string = `mongodb://${config.host}:${config.port}/${config.db}`;

// Instance Of Mongoose
connect(uri, {
  useCreateIndex: true,
  useNewUrlParser: true
})
.then(() => {
  // Init
  initDataBase();

  console.log(chalk.green('\n[MongoDB] Connection Success !'));
})
.catch(() => console.log(chalk.red('\n[MongoDB] Connection Failed !')));

const port: string | number = process.env.PORT || 5050;

// Display At Launch
const display = () => {
  const log = (text: string) => console.log(text);
  const setChalk = (color: any) => (text: string) => log(chalk[color](text));

  const blueLog = setChalk('blue');

  blueLog(' ______                           _______ _____');
  blueLog('|  ____|                         |__   __/ ____|');
  blueLog('| |__  __  ___ __  _ __ ___  ___ ___| | | (___');
  blueLog('|  __| \\ \\/ / \'_ \\| \'__/ _ \\/ __/ __| |  \\___ \\');
  blueLog('| |____ >  <| |_) | | |  __/\\__ \\__ \\ |  ____) |');
  blueLog('|______/_/\\_\\ .__/|_|  \\___||___/___/_| |_____/');
  blueLog('            | |');
  blueLog('            |_|');
  log('                    Listenin\' On http://localhost:' + port);
};

// Run
app.listen(port, (err: Error) => {
  if (err) {
    return console.log(err);
  }

  display();
});
