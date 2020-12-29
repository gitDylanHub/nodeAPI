import express = require('express');
import { RouterConfiguration } from '../common/routerConfiguration'

export class PeopleController extends RouterConfiguration{
  constructor(expressApp: express.Application) {
    super(expressApp, 'HomeRoutes');
  }
  configureRoutes() {
    this.expressApp.route(`/people`)
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send(`These are the People`);
      });

    return this.expressApp;    
  }
}