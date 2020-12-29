import express = require('express');
import { RouterConfiguration } from '../common/routerConfiguration'

/**
 * Film Controller: Films is the base, but will expand based on spec defined https://swapi.dev/documentation#films
 */
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