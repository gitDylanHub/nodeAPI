import express from 'express';
import { RouterConfiguration } from '../common/routerConfiguration'

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