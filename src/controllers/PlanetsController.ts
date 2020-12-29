import express = require('express');
import { RouterConfiguration } from '../common/routerConfiguration'
/**
 * Planets Controller: Films is the base, but will expand based on spec defined https://swapi.dev/documentation#planets
 */
export class PlanetsController extends RouterConfiguration{
  constructor(expressApp: express.Application) {
    super(expressApp, 'PlanetRoutes');
  }
  
  configureRoutes() {
    this.expressApp.route(`/planets`)
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send(`These are the Planets`);
      });

    return this.expressApp;    
  }
}