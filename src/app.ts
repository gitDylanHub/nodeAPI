
import express = require('express');
import * as bodyparser from 'body-parser';
import cors = require('cors');

import { RouterConfiguration } from './common/routerConfiguration';
import { HomeController } from './controllers/HomeController';
import { FilmsController } from './controllers/FilmsController';
import { PeopleController } from './controllers/PeopleController';
import { PlanetsController} from './controllers/PlanetsController';
import { StarshipsController } from './controllers/StarshipsController';

const app: express.Application = express();
const routes: Array<RouterConfiguration> = [];

app.set("port", process.env.PORT || 3000);
app.use(bodyparser.json());
app.use(cors());

routes.push(new HomeController(app));
routes.push(new FilmsController(app));
routes.push(new PeopleController(app));
routes.push(new PlanetsController(app));
routes.push(new StarshipsController(app));

export default app;