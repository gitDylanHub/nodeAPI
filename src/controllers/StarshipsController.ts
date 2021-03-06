import express = require('express');
import { RouterConfiguration } from '../common/routerConfiguration'

/**
 * Starships Controller: Films is the base, but will expand based on spec defined https://swapi.dev/documentation#starships
 */
export class StarshipsController extends RouterConfiguration{
  constructor(expressApp: express.Application) {
    super(expressApp, 'StarshipRoutes');
  }
  configureRoutes() {
    this.expressApp.route(`/starships`)
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send(`These are Starships`);
      });

    return this.expressApp;    
  }
}