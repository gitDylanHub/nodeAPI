import { RouterConfiguration } from '../common/routerConfiguration';
import express = require('express');

/**
 * Base Controller, non-functional just lets you know the application is running
 */
export class HomeController extends RouterConfiguration {
    constructor(expressApp: express.Application) {
        super(expressApp, 'HomeRoutes');
    }

    configureRoutes() {

        this.expressApp.route(`/`)
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`Server running at http://localhost:3000`)
            });

        return this.expressApp;
    }
}
