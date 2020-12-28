import { CommonRoutesConfig } from '../../Common/routes.config';
import express from 'express';

export class PlanetsRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'PlanetsRoutes');
  }

  configureRoutes() {
    this.app.route('/planets')
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send();
      })
      .post((req: express.Request, res: express.Response) => {
        res.status(200).send();
      });

      this.app.route('/planets/:planetId')
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send();
      })
      .post((req: express.Request, res: express.Response) => {
        res.status(200).send();
      })
      .put((req: express.Request, res: express.Response) => {
        res.status(200).send();
      })
      .patch((req: express.Request, res: express.Response) => {
        res.status(200).send();
      })
      .delete((req: express.Request, res: express.Response) => {
        res.status(200).send();
      });
    return this.app;
  }
}