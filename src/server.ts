import express from 'express';
import * as bodyparser from 'body-parser';
import cors from 'cors'

import { RouterConfiguration } from './common/routerConfiguration';
import { HomeController } from './controllers/HomeController';
import { FilmsController } from './controllers/FilmsController';
import { PeopleController } from './controllers/PeopleController';
import { PlanetsController} from './controllers/PlanetsController';
import { StarshipsController } from './controllers/StarshipsController';

const app: express.Application = express();
const port: Number = 3000;
const routes: Array<RouterConfiguration> = [];

app.use(bodyparser.json());
app.use(cors());

routes.push(new HomeController(app));
routes.push(new FilmsController(app));
routes.push(new PeopleController(app));
routes.push(new PlanetsController(app));
routes.push(new StarshipsController(app));

app.listen(port, () => {
    routes.forEach((route: RouterConfiguration) => {
        console.info(`Routes configured for ${route.getName()}`);
    });

    console.info(`*** Loading Database... ***`)
    console.info(`*** Server running at http://localhost:${port} ***`);
    
});