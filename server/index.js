import path from 'path';
import logger from 'morgan';
import dotenv from 'dotenv';
import express from 'express';
import { urlencoded, json } from 'body-parser';

import bootstrapHbs from './bootStrapping/bootstrapHbs';
import bootstrapHelmet from './bootStrapping/bootstrapHelmet';
import submitSurveyRoute from './routes/submitSurveyRoute';

const winston = require('winston');

dotenv.config();
const winstonLogger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
  ],
});

const app = express();
const port = process.env.PORT || 3001;
const distDir = path.join(__dirname, '../dist');

bootstrapHelmet(app);

app.get(['/', '/Error'],
  (req, res) => {
    res.render('client', { layout: false });
  });

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(express.static(distDir));

bootstrapHbs(app, path.join(`${__dirname}`, './views'));

app.use((req, res, next) => {
  req.app = app;
  req.logger = winstonLogger;
  next();
});

app.use('/api/submitSurvey', submitSurveyRoute);

app.get('*',
  (req, res) => {
    res.redirect('/Error');
  });

app.listen(port);
