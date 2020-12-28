import { CommonRoutesConfig } from '../../Common/routes.config';
import express from 'express';

export class StarshipsRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'StarshipsRoutes');
  }

  configureRoutes() {
    this.app.route('/starships')
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send();
      })
      .post((req: express.Request, res: express.Response) => {
        res.status(200).send();
      });

      this.app.route('/starships/:starshipId')
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