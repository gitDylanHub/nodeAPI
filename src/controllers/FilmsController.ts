import express = require('express');
import { RouterConfiguration } from '../common/routerConfiguration'

export class FilmsController extends RouterConfiguration{
  constructor(expressApp: express.Application) {
    super(expressApp, 'FilmRoutes');
  }
  configureRoutes() {
    this.expressApp.route(`/films`)
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send(`These are the Films`);
      });

    return this.expressApp;    
  }
}