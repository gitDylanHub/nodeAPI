import { CommonRoutesConfig } from '../../Common/routes.config';
import express from 'express';

export class PeopleRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'PeopleRoutes');
  }

  configureRoutes() {
    this.app.route('/people')
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send();
      })
      .post((req: express.Request, res: express.Response) => {
        res.status(200).send();
      });

      this.app.route('/people/:personId')
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